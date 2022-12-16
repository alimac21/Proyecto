import { error } from "console";
import { Tcoprouro } from "../entities/tcoprouro";
import { Response, Request } from "express";


export const createTcoprouro = async (req: Request, res: Response) => {
    try {
       const {nombre} = req.body
      
       const tcoprouro = new Tcoprouro()
       tcoprouro.nombre = nombre;
    
       await tcoprouro.save();
  
       return res.json(tcoprouro)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
}

export const getTcoprouros = async (req: Request, res: Response) => {
    try {
       const tcoprouro = await Tcoprouro.find()
    return res.json(tcoprouro) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
}

export const UpdateTcoprouro = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Tcoprouro.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Tcoprouro.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
}

export const deleteTcoprouro = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const prueba = 5;
      const afected = await Tcoprouro.findOneBy({id: parseInt(id)})
    
    const result = await Tcoprouro.delete({id: parseInt(id)})
  
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

export const getTcoprouro = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const tcoprouro = await Tcoprouro.findOneBy({id: parseInt(id)})
    return res.json(tcoprouro)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
}