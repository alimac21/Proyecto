import { error } from "console";
import { Request,Response } from "express";
import { Person} from "../entities/person";

export const createPerson = async (req: Request, res: Response) => {
    try {
      const {nombre, apellido, identificacion, fecha_de_nacimiento, direccion, tipo_sangre, sexo, telefono, telefono_emergencia} = req.body
      
      const person = new Person()
      person.nombre = nombre;
      person.apellido = apellido;
      person.identificacion = identificacion;
      person.fecha_de_nacimiento = fecha_de_nacimiento;
      person.direccion = direccion;
      person.tipo_sangre = tipo_sangre;
      person.sexo = sexo;
      person.telefono = telefono;
      person.telefono_emergencia = telefono_emergencia
      
  
      await person.save()
  
      return res.json(person)
    } catch (error){
      if (error instanceof Error){
          return res.status(500).json({message: error.message});
      }
    }
}

export const getPerson = async (req: Request, res: Response) => {
    try {
       const person = await Person.find()
    return res.json(person) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
    
   
}

export const UpdatePerson = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Person.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Person.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
}

export const deletePerson = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
    
    const result = await Person.delete({id: parseInt(id)})
    if(result.affected === 0){
      return res.status(404).json({message:"usuario no existe"})
    }
    return res.json({message: "El usuario fue borrado con exito"});
    } catch{
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
}

export const getPersons = async (req: Request, res: Response) => {
  try{
    const {id} = req.params
  const person = await Person.findOneBy({id: parseInt(id)})
  return res.json(person)
  }catch(error){
    if(error instanceof Error){
      return res.status(500).json({message: error.message})
    }
  }
  }

  export const getPersonss = async (req: Request, res: Response) => {
    try{
      const {identificacion} = req.params
    const person = await Person.findOneBy({id: parseInt(identificacion)})
    return res.json(person)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    }