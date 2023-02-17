import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Img} from "../entities/img";
import { Timg } from "../entities/timg";

export const create = async (req: Request, res: Response) => {
    try{
        const{nombre, fecha} = req.body
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const img = new Img();
        img.fecha = fecha;

        const timg = new Timg();
        timg.nombre = nombre;

        try {
            await queryRunner.manager.save(img);
            await queryRunner.manager.save(timg);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([img, timg]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}