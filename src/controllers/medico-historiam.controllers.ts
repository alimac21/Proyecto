import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Medico } from "../entities/medico";
import { Historiam } from "../entities/historiam";

export const create = async (req: Request, res: Response) => {
    try{
        const{estudio, person, recipe, indicaciones, phistoria } = req.body
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const medico = new Medico ();
        medico.estudio = estudio;
        medico.person = person;


        const historiam = new Historiam();
        historiam.recipe = recipe;
         historiam.indicaciones = indicaciones;
        historiam.phistoria = phistoria

        try {
            await queryRunner.manager.save(medico);
            await queryRunner.manager.save(historiam);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([medico, historiam]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}