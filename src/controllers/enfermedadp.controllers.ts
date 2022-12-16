import { error } from "console";
import { Enfermedadp } from "../entities/enfermedadp";
import { Response, Request } from "express";

export const createEnfermedadp = async (req: Request, res: Response) => {
    try {
       const {nombre, tipo} = req.body
      
       const enfermedadp = new Enfermedadp()
       enfermedadp.nombre = nombre;
       enfermedadp.tipo = tipo;
       
   
       await enfermedadp.save();
  
       return res.json(Enfermedadp)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
    
  
  }

export const getEnfermedadps = async (req: Request, res: Response) => {
    try {
       const enfermedadp = await Enfermedadp.find()
    return res.json(enfermedadp) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
  }

export const UpdateEnfermedadp = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Enfermedadp.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Enfermedadp.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
  }

export const deleteEnfermedadp = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const prueba = 5;
      const afected = await Enfermedadp.findOneBy({id: parseInt(id)})
    
    const result = await Enfermedadp.delete({id: parseInt(id)})
  
    if(result.affected === 0){
      return res.status(404).json({message:"Enfermedadp no existe"})
    }
      return res.json({message: "Enfermedadp borrado con exito"});
    } catch{
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    
  }

  export const getEnfermedadp = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const enfermedadp = await Enfermedadp.findOneBy({id: parseInt(id)})
    return res.json(Enfermedadp)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    }