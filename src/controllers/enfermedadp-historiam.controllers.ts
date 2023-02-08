import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Historiam } from "../entities/historiam";
import { Alergiap } from "../entities/alergiap";
import { Enfermedad } from "../entities/enfermedad";
import { Enfermedadp } from "../entities/enfermedadp";

export const create = async (req: Request, res: Response) => {
    try{
        const{nombre, tipo, recipe, indicaciones, phistoria} = req.body
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const enfermedadp = new Enfermedadp();
        enfermedadp.nombre = nombre;
        enfermedadp.tipo = tipo;

        const historiam = new Historiam();
        historiam.recipe = recipe;
     historiam.indicaciones = indicaciones;
     historiam.phistoria = phistoria

     try {
        await queryRunner.manager.save(historiam);
        await queryRunner.manager.save(enfermedadp);
  
        await queryRunner.commitTransaction();
      } catch (error) {
          await queryRunner.rollbackTransaction();
      } finally {
          await queryRunner.release();
      }
  
      return res.json([historiam, enfermedadp]);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }

}


    }

