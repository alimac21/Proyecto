import { error } from "console";
import { Coprouro } from "../entities/coprouro";
import { Response, Request } from "express";


export const createCoprouro = async (req: Request, res: Response) => {
    try {
       const {fecha} = req.body
      
       const coprouro = new Coprouro()
       coprouro.fecha = fecha;
    
       await coprouro.save();
  
       return res.json(coprouro)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
}

export const getCoprouros = async (req: Request, res: Response) => {
    try {
       const coprouro = await Coprouro.find()
    return res.json(coprouro) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
}

export const UpdateCoprouro = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Coprouro.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Coprouro.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
}

export const deleteCoprouro = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const prueba = 5;
      const afected = await Coprouro.findOneBy({id: parseInt(id)})
    
    const result = await Coprouro.delete({id: parseInt(id)})
  
    if(result.affected === 0){
      return res.status(404).json({message:"usuario no existe"})
    }
      return res.json({message: "Borrada con exito"});
    } catch{
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    
}

export const getCoprouro = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const coprouro = await Coprouro.findOneBy({id: parseInt(id)})
    return res.json(coprouro)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
}