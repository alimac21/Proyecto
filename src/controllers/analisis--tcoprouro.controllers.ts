import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Analisis } from "../entities/analisis";
import { Tcoprouro } from "../entities/tcoprouro";
import { Timg } from "../entities/timg";

export const create = async (req: Request, res: Response) => {
    try{
        const{nombre, timg} = req.body
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const analisis = new Analisis();
        analisis.timg = timg;


        const tcoprouro= new Tcoprouro();
        tcoprouro.nombre = nombre;

        try {
            await queryRunner.manager.save(analisis);
            await queryRunner.manager.save(tcoprouro);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([analisis, tcoprouro]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}