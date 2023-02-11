import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Estado } from "../entities/estado";
import { Municipio } from "../entities/municipio";


export const create = async (req: Request, res: Response) => {
    try{
        const{ nombre_estado, nombre_municipio} = req.body

        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const estado = new Estado() 
        estado.nombre_estado = nombre_estado;


        const municipio = new Municipio()
        municipio.nombre_municipio = nombre_municipio;
        municipio.estado = estado;


        try {
            await queryRunner.manager.save(estado);
            await queryRunner.manager.save(municipio);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([estado, municipio]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }

        }
    