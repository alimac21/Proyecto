import { error } from "console";
import { Img } from "../entities/img";
import { Response, Request } from "express";
import { Timg } from "../entities/timg";


export const createImg = async (req: Request, res: Response) => {
    try {
       const {fecha, timg} = req.body
      
       const img = new Img()
       img.fecha = fecha;
       img.timg = timg; 

       const validar_timg = await Timg.findOne ({where:{id:timg}});

     if (!validar_timg){
      return res.status(500).json({ message: "no se encontro"});
    }
    
       await img.save();
  
       return res.json(img)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
}

export const getImgs = async (req: Request, res: Response) => {
    try {
       const img = await Img.find()
    return res.json(img) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
}

export const UpdateImg = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Img.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Img.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
}

export const deleteImg = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const prueba = 5;
      const afected = await Img.findOneBy({id: parseInt(id)})
    
    const result = await Img.delete({id: parseInt(id)})
  
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

export const getImg = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const img = await Img.findOneBy({id: parseInt(id)})
    return res.json(img)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
}  