import { error } from "console";
import { Analisis } from "../entities/analisis";
import { Response, Request } from "express";

export const createAnalisis = async (req: Request, res: Response) => {
    try {
       const {} = req.body
      
       const analisis = new Analisis()

   
       await analisis.save();
  
       return res.json(analisis)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
    
  
  }

export const getAnalisiss = async (req: Request, res: Response) => {
    try {
       const analisis = await Analisis.find()
    return res.json(analisis) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
  }

export const UpdateAnalisis = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Analisis.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Analisis.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
  }

export const deleteAnalisis = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const prueba = 5;
      const afected = await Analisis.findOneBy({id: parseInt(id)})
    
    const result = await Analisis.delete({id: parseInt(id)})
  
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

  export const getAnalisis = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const analisis = await Analisis.findOneBy({id: parseInt(id)})
    return res.json(analisis)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
  }
  