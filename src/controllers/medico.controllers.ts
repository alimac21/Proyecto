import { error } from "console";
import { Medico } from "../entities/medico";
import { Response, Request } from "express";
import { Person } from "../entities/person";

export const createMedico = async (req: Request, res: Response) => {
  try {
     const {estudio, person} = req.body
    
     const medico = new Medico()
     medico.estudio = estudio;
     medico.person = person;

     const validar_person = await Person.findOne ({where:{id:person}});

     if (!validar_person){
      return res.status(500).json({ message: "no se encontro esta persona"});
    }
 
     await medico.save();

     return res.json(medico)
   } catch (error){
     if (error instanceof Error){
         return res.status(500).json({message: error.message});
     }
   }
  

}

export const getMedicos = async (req: Request, res: Response) => {
  try {
     const medico = await Medico.find()
  return res.json(medico) 
  } catch (error) {
    if(error instanceof Error) {
      return res.status(500).json({mesagge: error.message})
    }
  }

}

export const UpdateMedico = async (req: Request, res: Response) => {
  try{
    const {id} = req.params
  
    const user = await Medico.findOneBy({id: parseInt (req.params.id)});
    
  if (!user) return res.status(404).json ({message: 'usuario no existe'});
  
    await Medico.update({id: parseInt(id) }, req.body)
  
    return res.sendStatus(204)
  } catch (error){
    if (error instanceof Error){
      return res.status(500).json({message: error.message});
    }
  }
}

export const deleteMedico = async (req: Request, res: Response) =>{
  try{
    const{id} = req.params
    const prueba = 5;
    const afected = await Medico.findOneBy({id: parseInt(id)})
  
  const result = await Medico.delete({id: parseInt(id)})

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

export const getMedico = async (req: Request, res: Response) => {
  try{
    const {id} = req.params
  const medico = await Medico.findOneBy({id: parseInt(id)})
  return res.json(medico)
  }catch(error){
    if(error instanceof Error){
      return res.status(500).json({message: error.message})
    }
  }
}