import { error } from "console";
import { Enfermera } from "../entities/enfermera";
import { Response, Request } from "express";

export const createEnfermera = async (req: Request, res: Response) => {
    try {
       const {} = req.body
      
       const enfermera = new Enfermera()

   
       await enfermera.save();
  
       return res.json(enfermera)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
    
  
  }

export const getEnfermeras = async (req: Request, res: Response) => {
    try {
       const enfermera = await Enfermera.find()
    return res.json(enfermera) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
  }
  
export const UpdateEnfermera = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Enfermera.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Enfermera.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
  }

export const deleteEnfermera = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const prueba = 5;
      const afected = await Enfermera.findOneBy({id: parseInt(id)})
    
    const result = await Enfermera.delete({id: parseInt(id)})
  
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
  
export const getEnfermera = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const enfermera = await Enfermera.findOneBy({id: parseInt(id)})
    return res.json(enfermera)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    }
  