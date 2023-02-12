import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Analisis } from "../entities/analisis";
import { Tquimsang } from "../entities/tquimsang";

export const create = async (req: Request, res: Response) => {
    try{
        const{nombre} = req.body
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const analisis = new Analisis();
        


        const tquimsang = new Tquimsang ();
        tquimsang.nombre = nombre;

        try {
            await queryRunner.manager.save(analisis);
            await queryRunner.manager.save(tquimsang);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([analisis, tquimsang]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}
