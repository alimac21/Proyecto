import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Historiam } from "../entities/historiam";
import { Phistoria } from "../entities/phistoria";

export const create = async (req: Request, res: Response) => {
    try{
        const{recipe, indicaciones, altura, peso, temperatura, N_historia, fecha, tension, sintomas, razon_visita, person} = req.body

        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const historiam = new Historiam();
        historiam.recipe = recipe;
        historiam.indicaciones = indicaciones;

        const phistoria = new Phistoria
        phistoria.altura = altura; 
      phistoria.peso = peso;
      phistoria.temperatura = temperatura;
      phistoria.N_historia = N_historia;
      phistoria.fecha = fecha;
      phistoria.tension = tension;
      phistoria.sintomas = sintomas;
      phistoria.razon_visita = razon_visita;
      phistoria.person = person;


      try {
        await queryRunner.manager.save(historiam);
        await queryRunner.manager.save(phistoria);
  
        await queryRunner.commitTransaction();
      } catch (error) {
          await queryRunner.rollbackTransaction();
      } finally {
          await queryRunner.release();
      }
  
      return res.json([historiam, phistoria]);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }

    }