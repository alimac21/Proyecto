import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Historiam } from "../entities/historiam";
import { Analisis } from "../entities/analisis";

export const create = async (req: Request, res: Response) => {
    try{
        const {tquimsang, tcoprouro,timg, recipe, indicaciones, phistoria}= req.body

        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const analisis = new Analisis ();
        analisis.tquimsang = tquimsang;
        analisis.tcoprouro = tcoprouro;
        analisis.timg = timg



        const historiam = new Historiam();
        historiam.recipe = recipe;
      historiam.indicaciones = indicaciones;
      historiam.phistoria = phistoria

        try {
            await queryRunner.manager.save(historiam);
            await queryRunner.manager.save(analisis);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([historiam, analisis]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}