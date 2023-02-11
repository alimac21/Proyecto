import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Parroquia } from "../entities/parroquia";
import { Municipio } from "../entities/municipio";


export const create = async (req: Request, res: Response) => {
    try{
        const{ nombre_parroquia, nombre_municipio} = req.body

        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const parroquia = new Parroquia() 
        parroquia.nombre_parroquia = nombre_parroquia;


        const municipio = new Municipio()
        municipio.nombre_municipio = nombre_municipio;
        municipio.parroquia = parroquia;


        try {
            await queryRunner.manager.save(parroquia);
            await queryRunner.manager.save(municipio);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([parroquia, municipio]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }

        }