import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Medico } from "../entities/medico";
import { Historiam } from "../entities/historiam";

export const create = async (req: Request, res: Response) => {
    try{
        const{recipe, indicaciones, estudio, person} = req.body

        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const historiam = new Historiam();
        historiam.recipe = recipe;
     historiam.indicaciones = indicaciones;


        const medico = new Medico();
        medico.estudio = estudio;
        medico.person = person;


        try {
            await queryRunner.manager.save(medico);
            await queryRunner.manager.save(historiam);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([historiam, medico]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}