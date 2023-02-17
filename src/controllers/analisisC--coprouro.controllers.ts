import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { AnalisisC } from "../entities/analisisC";
import { Coprouro } from "../entities/coprouro";

export const create = async (req: Request, res: Response) => {
    try{
        const{resultado, fecha} = req.body
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const analisisC = new AnalisisC();
        analisisC.resultado = resultado;


        const coprouro = new Coprouro();
        coprouro.fecha = fecha;

        try {
            await queryRunner.manager.save(coprouro);
            await queryRunner.manager.save(analisisC);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([analisisC, coprouro]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}

