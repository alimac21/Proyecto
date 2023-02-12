import { error } from "console";
import { Quimsang } from "../entities/quimsang";
import { Response, Request } from "express"; 
import { Tquimsang } from "../entities/tquimsang";


export const createQuimsang = async (req: Request, res: Response) => {
    try {
       const {fecha, tquimsang} = req.body
      
       const quimsang = new Quimsang()
       quimsang.fecha = fecha;
       quimsang.tquimsang = tquimsang;

       const validar_tquimsang = await Tquimsang.findOne ({where:{id:tquimsang}});

     if (!validar_tquimsang){
      return res.status(500).json({ message: "no se encontro esta persona"});
    }
    
       await quimsang.save();
  
       return res.json(quimsang)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
}

export const getQuimsangs = async (req: Request, res: Response) => {
  try {
     const quimsang = await Quimsang.find()
  return res.json(quimsang) 
  } catch (error) {
    if(error instanceof Error) {
      return res.status(500).json({mesagge: error.message})
    }
  }

}

export const UpdateQuimsang = async (req: Request, res: Response) => {
  try{
    const {id} = req.params
  
    const user = await Quimsang.findOneBy({id: parseInt (req.params.id)});
    
  if (!user) return res.status(404).json ({message: 'usuario no existe'});
  
    await Quimsang.update({id: parseInt(id) }, req.body)
  
    return res.sendStatus(204)
  } catch (error){
    if (error instanceof Error){
      return res.status(500).json({message: error.message});
    }
  }
}

export const deleteQuimsang = async (req: Request, res: Response) =>{
  try{
    const{id} = req.params
    const prueba = 5;
    const afected = await Quimsang.findOneBy({id: parseInt(id)})
  
  const result = await Quimsang.delete({id: parseInt(id)})

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

export const getQuimsang = async (req: Request, res: Response) => {
  try{
    const {id} = req.params
  const quimsang = await Quimsang.findOneBy({id: parseInt(id)})
  return res.json(quimsang)
  }catch(error){
    if(error instanceof Error){
      return res.status(500).json({message: error.message})
    }
  }
}