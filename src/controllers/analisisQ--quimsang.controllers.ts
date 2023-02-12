import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Quimsang } from "../entities/quimsang";
import { AnalisisQ } from "../entities/analisisQ";

export const create = async (req: Request, res: Response) => {
    try{
        const{resultado, fecha} = req.body
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const analisisQ = new AnalisisQ();
        analisisQ.resultado = resultado;


        const quimsang = new Quimsang();
        quimsang.fecha = fecha;

        try {
            await queryRunner.manager.save(quimsang);
            await queryRunner.manager.save(analisisQ);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([quimsang, analisisQ]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}
