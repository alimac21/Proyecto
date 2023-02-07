import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Personaux } from "../entities/personaux";
import { Phistoria } from "../entities/phistoria";

export const create = async (req: Request, res: Response) => {
    try{
        const{tipo, altura, peso, temperatura, N_historia, fecha, tension, sintomas, razon_visita, person} = req.body
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const personaux = new Personaux ();
        personaux.tipo = tipo;


        const phistoria = new Phistoria();
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
            await queryRunner.manager.save(personaux);
            await queryRunner.manager.save(phistoria);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([phistoria, personaux]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}