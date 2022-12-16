import { error } from "console";
import { Alergia } from "../entities/alergia"
import { Response, Request } from "express";


export const createAlergia = async (req: Request, res: Response) => {
    try {
       const {tipo} = req.body
      
       const alergia = new Alergia()
       alergia.tipo = tipo;

   
       await alergia.save();
  
       return res.json(alergia)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
  }

export const getAlergias = async (req: Request, res: Response) => {
    try {
       const alergia = await Alergia.find()
    return res.json(alergia) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
  }

export const UpdateAlergia = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Alergia.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Alergia.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
  }

export const deleteAlergia = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const prueba = 5;
      const afected = await Alergia.findOneBy({id: parseInt(id)})
    
    const result = await Alergia.delete({id: parseInt(id)})
  
    if(result.affected === 0){
      return res.status(404).json({message:"usuario no existe"})
    }
      return res.json({message: "Alergia borrada con exito"});
    } catch{
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    
  }

export const getAlergia = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const alergia = await Alergia.findOneBy({id: parseInt(id)})
    return res.json(alergia)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    }