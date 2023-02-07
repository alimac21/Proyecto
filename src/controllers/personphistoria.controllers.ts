import { Response, Request } from "express";
import {AppDataSourse } from "../db";
import { Phistoria } from "../entities/phistoria";
import { Person } from "../entities/person";

export const create = async (req: Request, res: Response) => {
    try {
  const {nombre, apellido, identificacion,fecha_de_nacimiento, direccion, tipo_sangre, sexo, telefono, telefono_emergencia,alergiap,
    altura, peso, temperatura, N_historia, fecha, tension, sintomas, razon_visita} = req.body

        const queryRunner = AppDataSourse.createQueryRunner();
        queryRunner.connect();
        queryRunner.startTransaction()

        const person =new Person();
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

    const phistoria  = new Phistoria();

      phistoria.altura = altura; 
      phistoria.peso = peso;
      phistoria.temperatura = temperatura;
      phistoria.N_historia = N_historia;
      phistoria.fecha = fecha;
      phistoria.tension = tension;
      phistoria.sintomas = sintomas;
      phistoria.razon_visita = razon_visita;
      phistoria.person= person;

    try {
        await queryRunner.manager.save(person);
        await queryRunner.manager.save(phistoria);
  
        await queryRunner.commitTransaction();
      } catch (error) {
          await queryRunner.rollbackTransaction();
      } finally {
          await queryRunner.release();
      }
  
      return res.json([person, phistoria]);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }

    }
