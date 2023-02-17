import { error } from "console";
import { Analisis } from "../entities/analisis";
import { Response, Request } from "express";
import { Historiam } from "../entities/historiam";
import { Tcoprouro } from "../entities/tcoprouro";
import { Tquimsang } from "../entities/tquimsang";

export const createAnalisis = async (req: Request, res: Response) => {
    try {
       const {historiam, timg, tcoprouro, tquimsang} = req.body
      
       const analisis = new Analisis()
       analisis.historiam= historiam;
       analisis.timg = timg;
       analisis.tcoprouro = tcoprouro;
       analisis.tquimsang = tquimsang;

       const validar_historiam = await Historiam.findOneBy({id:parseInt(historiam)});
       if(!validar_historiam){
         return res.status(500).json({ message: "no se encontro este registro"});
       }

       const validar_tquimsang = await Tquimsang.findOneBy({id:parseInt(historiam)});
       if(!validar_tquimsang){
         return res.status(500).json({ message: "no se encontro este examen sanguineo"});
       }

       const validar_tcoprouro = await Tcoprouro.findOneBy({id:parseInt(historiam)});
       if(!validar_tcoprouro){
         return res.status(500).json({ message: "no se encontro este examen"});
       }

   
       await analisis.save();
  
       return res.json(analisis)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       } 
     }
    
  
  }

export const getAnalisiss = async (req: Request, res: Response) => {
    try {
       const analisis = await Analisis.find()
    return res.json(analisis) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
  }

export const UpdateAnalisis = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Analisis.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Analisis.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
  }

export const deleteAnalisis = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const prueba = 5;
      const afected = await Analisis.findOneBy({id: parseInt(id)})
    
    const result = await Analisis.delete({id: parseInt(id)})
  
    if(result.affected === 0){
      return res.status(404).json({message:"usuario no existe"})
    }
      return res.json({message: "El usuario fue borrado con exito"});
    } catch{
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    
  }

  export const getAnalisis = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const analisis = await Analisis.findOneBy({id: parseInt(id)})
    return res.json(analisis)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
  }
  