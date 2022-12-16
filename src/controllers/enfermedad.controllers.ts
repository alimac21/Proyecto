import { error } from "console";
import { Enfermedad } from "../entities/enfermedad";
import { Response, Request } from "express";

export const createEnfermedad = async (req: Request, res: Response) => {
    try {
       const {nombre} = req.body
      
       const enfermedad = new Enfermedad()
       enfermedad.nombre = nombre;
    

   
       await enfermedad.save();
  
       return res.json(enfermedad)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
    
  
  }

export const getEnfermedads = async (req: Request, res: Response) => {
    try {
       const enfermedad = await Enfermedad.find()
    return res.json(enfermedad) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
  }

export const UpdateEnfermedad = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Enfermedad.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Enfermedad.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
  }

export const deleteEnfermedad = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const prueba = 5;
      const afected = await Enfermedad.findOneBy({id: parseInt(id)})
    
    const result = await Enfermedad.delete({id: parseInt(id)})
  
    if(result.affected === 0){
      return res.status(404).json({message:"Enfermedad no existe"})
    }
      return res.json({message: "Enfermedad borrado con exito"});
    } catch{
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    
  }

  export const getEnfermedad = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const enfermedad = await Enfermedad.findOneBy({id: parseInt(id)})
    return res.json(enfermedad)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    }