import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { AnalisisImg } from "../entities/analisisImg";
import { Img } from "../entities/img";

export const create = async (req: Request, res: Response) => {
    try{
        const{resultado, fecha, timg} = req.body
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const analisisImg = new AnalisisImg();
        analisisImg.resultado = resultado;


        const img = new Img();
        img.fecha = fecha;
        img.timg = timg; 

        try {
            await queryRunner.manager.save(analisisImg);
            await queryRunner.manager.save(img);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([analisisImg, img]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}
