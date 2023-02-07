import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Historiam } from "../entities/historiam";
import { Analisis } from "../entities/analisis";
import { Tquimsang } from "../entities/tquimsang";
import { Tcoprouro } from "../entities/tcoprouro";

export const create = async (req: Request, res: Response) => {
    try{
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const analisis = new Analisis ();
        analisis.historiam = historiam;
        analisis.tquimsang = tquimsang;
        analisis.tcoprouro = tcoprouro;
        analisis.timg = timg



        const historiam = new Historiam();

        try {
            await queryRunner.manager.save(person);
            await queryRunner.manager.save(alergiap);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([person, alergiap]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}