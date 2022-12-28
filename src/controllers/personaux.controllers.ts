import { error } from "console";
import { Personaux } from "../entities/personaux";
import { Response, Request } from "express";

export const createPersonaux = async (req: Request, res: Response) => {
  try {
     const {tipo} = req.body
    
     const personaux = new Personaux()
     personaux.tipo = tipo;
 
     await personaux.save();

     return res.json(personaux)
   } catch (error){
     if (error instanceof Error){
         return res.status(500).json({message: error.message});
     }
   }
  

}

export const getPersonauxs = async (req: Request, res: Response) => {
  try {
     const personaux = await Personaux.find()
  return res.json(personaux) 
  } catch (error) {
    if(error instanceof Error) {
      return res.status(500).json({mesagge: error.message})
    }
  }

}

export const UpdatePersonaux = async (req: Request, res: Response) => {
  try{
    const {id} = req.params
  
    const user = await Personaux.findOneBy({id: parseInt (req.params.id)});
    
  if (!user) return res.status(404).json ({message: 'usuario no existe'});
  
    await Personaux.update({id: parseInt(id) }, req.body)
  
    return res.sendStatus(204)
  } catch (error){
    if (error instanceof Error){
      return res.status(500).json({message: error.message});
    }
  }
}

export const deletePersonaux = async (req: Request, res: Response) =>{
  try{
    const{id} = req.params
    const prueba = 5;
    const afected = await Personaux.findOneBy({id: parseInt(id)})
  
  const result = await Personaux.delete({id: parseInt(id)})

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

export const getPersonaux = async (req: Request, res: Response) => {
  try{
    const {id} = req.params
  const personaux = await Personaux.findOneBy({id: parseInt(id)})
  return res.json(personaux)
  }catch(error){
    if(error instanceof Error){
      return res.status(500).json({message: error.message})
    }
  }
}