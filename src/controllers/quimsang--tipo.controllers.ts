import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Quimsang } from "../entities/quimsang";
import { Tquimsang } from "../entities/tquimsang";

export const create = async (req: Request, res: Response) => {
    try{
        const{nombre, fecha} = req.body
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const quimsang = new Quimsang();
        quimsang.fecha = fecha;


        const tquimsang = new Tquimsang();
        tquimsang.nombre = nombre;

        try {
            await queryRunner.manager.save(quimsang);
            await queryRunner.manager.save(tquimsang);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([quimsang, tquimsang]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}