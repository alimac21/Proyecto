import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Coprouro } from "../entities/coprouro";
import { Tcoprouro } from "../entities/tcoprouro";

export const create = async (req: Request, res: Response) => {
    try{
        const{fecha, nombre} = req.body
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const coprouro = new Coprouro();
        coprouro.fecha = fecha;


        const tcoprouro = new Tcoprouro();
        tcoprouro.nombre = nombre;

        try {
            await queryRunner.manager.save(coprouro);
            await queryRunner.manager.save(tcoprouro);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([coprouro, tcoprouro]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}

