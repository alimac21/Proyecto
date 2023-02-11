import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Person } from "../entities/person";
import { Sector } from "../entities/sector";

export const create = async (req: Request, res: Response) => {
    try{
        const{nombre, apellido, identificacion, fecha_de_nacimiento, direccion, tipo_sangre, sexo, telefono, 
        telefono_emergencia, alergiap, nombre_sector, localidad} = req.body
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const person = new Person ();
        person.nombre = nombre;
        person.apellido = apellido;
        person.identificacion = identificacion;
        person.fecha_de_nacimiento = fecha_de_nacimiento;
        person.direccion = direccion;
        person.tipo_sangre = tipo_sangre;
        person.sexo = sexo;
        person.telefono = telefono;
        person.telefono_emergencia = telefono_emergencia;
        person.alergiap=alergiap

        const sector = new Sector();
        sector.nombre_sector = nombre_sector;
        sector.localidad = localidad;

        try {
            await queryRunner.manager.save(person);
            await queryRunner.manager.save(sector);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([person, sector]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}