import { error } from "console";
import { Request,Response } from "express";
import { Phistoria } from "../entities/phistoria";

export const createPhistoria = async (req: Request, res: Response) => {
    try {
      const {altura, peso, temperatura, N_historia, fecha, tension, sintomas, razon_visita} = req.body
      
      const phistoria = new Phistoria()
      phistoria.altura = altura; 
      phistoria.peso = peso;
      phistoria.temperatura = temperatura;
      phistoria.N_historia = N_historia;
      phistoria.fecha = fecha;
      phistoria.tension = tension;
      phistoria.sintomas = sintomas;
      phistoria.razon_visita = razon_visita

      
  
      await phistoria.save()
  
      return res.json(phistoria)
    } catch (error){
      if (error instanceof Error){
          return res.status(500).json({message: error.message});
      }
    }
}


export const getPhistorias = async (req: Request, res: Response) => {
    try {
       const phistoria = await Phistoria.find()
    return res.json(phistoria) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
    
   
}


export const UpdatePhistoria = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Phistoria.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Phistoria.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
}


export const deletePhistoria = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
    
    const result = await Phistoria.delete({id: parseInt(id)})
    if(result.affected === 0){
      return res.status(404).json({message:"registro no existe"})
    }
    return res.json({message: "registro fue borrado con exito"});
    } catch{
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
}


export const getPhistoria = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const phistoria = await Phistoria.findOneBy({id: parseInt(id)})
    return res.json(phistoria)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    }
  