import { error } from "console";
import { AnalisisQ } from "../entities/analisisQ";
import { Response, Request } from "express";

export const createAnalisisQ = async (req: Request, res: Response) => {
    try {
       const {resultado} = req.body
      
       const analisisQ = new AnalisisQ()
       analisisQ.resultado = resultado;
    
       await analisisQ.save();
  
       return res.json(analisisQ)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
}

export const getAnalisisQs = async (req: Request, res: Response) => {
    try {
       const analisisQ = await AnalisisQ.find()
    return res.json(analisisQ) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
}

export const UpdateAnalisisQ = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await AnalisisQ.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await AnalisisQ.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
}

export const deleteAnalisisQ = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const afected = await AnalisisQ.findOneBy({id: parseInt(id)})
    
    const result = await AnalisisQ.delete({id: parseInt(id)})
  
    if(result.affected === 0){
      return res.status(404).json({message:"no existe"})
    }
      return res.json({message: "El resultado fue borrado con exito"});
    } catch{
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    
}

export const getAnalisisQ = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const analisisQ = await AnalisisQ.findOneBy({id: parseInt(id)})
    return res.json(analisisQ)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
}