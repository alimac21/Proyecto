import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Alergia } from "../entities/alergia";
import { Alergiap } from "../entities/alergiap";

export const create = async (req: Request, res: Response) => {
    try {

        const{tipo, gravedad, fecha}=req.body

        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const alergia = new Alergia
        alergia.tipo= tipo;

        const alergiap = new Alergiap ();
        alergiap.gravedad=gravedad;
        alergiap.fecha=fecha

        try {
            await queryRunner.manager.save(alergia);
            await queryRunner.manager.save(alergiap);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([alergia, alergiap]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }
        }
      };