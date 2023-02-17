import { error } from "console";
import { AnalisisImg } from "../entities/analisisImg";
import { Response, Request } from "express";
import { Img } from "../entities/img";

export const createAnalisisImg = async (req: Request, res: Response) => {
    try {
       const {resultado, img} = req.body
      
       const analisisImg = new AnalisisImg()
       analisisImg.resultado = resultado;
       analisisImg.img= img;

       
const validar_img = await Img.findOne ({where:{id:img}});

if (!validar_img){
 return res.status(500).json({ message: "no se encontro esta persona"});
}
    

       await analisisImg.save();
  
       return res.json(analisisImg)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
}

export const getAnalisisImgs = async (req: Request, res: Response) => {
    try {
       const analisisImg = await AnalisisImg.find()
    return res.json(analisisImg) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
}

export const UpdateAnalisisImg = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await AnalisisImg.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await AnalisisImg.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
}

export const deleteAnalisisImg = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const afected = await AnalisisImg.findOneBy({id: parseInt(id)})
    
    const result = await AnalisisImg.delete({id: parseInt(id)})
  
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

export const getAnalisisImg = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const analisisImg = await AnalisisImg.findOneBy({id: parseInt(id)})
    return res.json(AnalisisImg)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
}