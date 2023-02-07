import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Person } from "../entities/person";
import { Alergiap } from "../entities/alergiap";

export const create = async (req: Request, res: Response) => {
    try{
        const{gravedad, fecha, alergia, nombre, apellido, identificacion, fecha_de_nacimiento, direccion, tipo_sangre, sexo, telefono, telefono_emergencia} = req.body
        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const alergiap = new Alergiap();
        alergiap.gravedad = gravedad;
       alergiap.fecha = fecha;
       alergiap.alergia = alergia


        const person = new Person();
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

        try {
            await queryRunner.manager.save(person);
            await queryRunner.manager.save(alergiap);
      
            await queryRunner.commitTransaction();
          } catch (error) {
              await queryRunner.rollbackTransaction();
          } finally {
              await queryRunner.release();
          }
      
          return res.json([person, alergiap]);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }

    }


}