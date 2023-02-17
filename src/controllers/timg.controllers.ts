import { error } from "console";
import { Timg } from "../entities/timg";
import { Response, Request } from "express";


export const createTimg = async (req: Request, res: Response) => {
    try {
       const {nombre} = req.body
      
       const timg = new Timg()
       timg.nombre = nombre;
    
       await timg.save();
  
       return res.json(timg)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
}  

export const getTimgs = async (req: Request, res: Response) => {
    try {
       const timg = await Timg.find()
    return res.json(timg) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
}

export const UpdateTimg = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Timg.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Timg.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
}

export const deleteTimg = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const prueba = 5;
      const afected = await Timg.findOneBy({id: parseInt(id)})
    
    const result = await Timg.delete({id: parseInt(id)})
  
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

export const getTimg = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const timg = await Timg.findOneBy({id: parseInt(id)})
    return res.json(timg)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
}