import { error } from "console";
import { Tquimsang } from "../entities/tquimsang";
import { Response, Request } from "express";


export const createTquimsang = async (req: Request, res: Response) => {
    try {
       const {nombre} = req.body
      
       const tquimsang = new Tquimsang()
       tquimsang.nombre = nombre;
    
       await tquimsang.save();
  
       return res.json(tquimsang)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
}

export const getTquimsangs = async (req: Request, res: Response) => {
    try {
       const tquimsang = await Tquimsang.find()
    return res.json(tquimsang) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
}

export const UpdateTquimsang = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Tquimsang.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Tquimsang.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
}

export const deleteTquimsang = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const prueba = 5;
      const afected = await Tquimsang.findOneBy({id: parseInt(id)})
    
    const result = await Tquimsang.delete({id: parseInt(id)})
  
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

export const getTquimsang = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const tquimsang = await Tquimsang.findOneBy({id: parseInt(id)})
    return res.json(tquimsang)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
}