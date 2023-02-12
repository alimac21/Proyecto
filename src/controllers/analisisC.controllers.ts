import { error } from "console";
import { AnalisisC } from "../entities/analisisC";
import { Response, Request } from "express";
import { Coprouro } from "../entities/coprouro";

export const createAnalisisC = async (req: Request, res: Response) => {
    try {
       const {resultado,coprouro} = req.body
      
       const analisisC = new AnalisisC()
       analisisC.resultado = resultado;
       analisisC.coprouro = coprouro

       const validar_coprouro = await Coprouro.findOne ({where:{id:coprouro}});

     if (!validar_coprouro){
      return res.status(500).json({ message: "no se encontro esta persona"});
    }
    
       await analisisC.save();
  
       return res.json(analisisC)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
}

export const getAnalisisCs = async (req: Request, res: Response) => {
    try {
       const analisisC = await AnalisisC.find()
    return res.json(analisisC) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
}

export const UpdateAnalisisC = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await AnalisisC.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await AnalisisC.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
}

export const deleteAnalisisC = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const afected = await AnalisisC.findOneBy({id: parseInt(id)})
    
    const result = await AnalisisC.delete({id: parseInt(id)})
  
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

export const getAnalisisC = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const analisisC = await AnalisisC.findOneBy({id: parseInt(id)})
    return res.json(AnalisisC)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
}