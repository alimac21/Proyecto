import { error } from "console";
import { Historiam } from "../entities/historiam";
import { Response, Request } from "express";
import { Phistoria } from "../entities/phistoria";
import { Person } from "../entities/person";

export const createHistoriam = async (req: Request, res: Response) => {
  try {
     const {recipe, indicaciones, phistoria} = req.body
    
     const historiam = new Historiam()
     historiam.recipe = recipe;
     historiam.indicaciones = indicaciones;
     historiam.phistoria = phistoria

     const validar_phistoria = await Phistoria.findOneBy({id:parseInt(phistoria)});
    

    if(!validar_phistoria){
      return res.status(500).json({ message: "no se encontro este registro"});
    }
 
     await historiam.save();

     return res.json(historiam)
   } catch (error){
     if (error instanceof Error){
         return res.status(500).json({message: error.message});
     }
   }
  

}


export const getHistoriams = async (req: Request, res: Response) => {
    try {
       const historiam = await Historiam.find()
    return res.json(historiam) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
}


export const UpdateHistoriam = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Historiam.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Historiam.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
  }
  

  export const deleteHistoriam = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const prueba = 5;
      const afected = await Historiam.findOneBy({id: parseInt(id)})
    
    const result = await Historiam.delete({id: parseInt(id)})
  
    if(result.affected === 0){
      return res.status(404).json({message:"registro no existe"})
    }
      return res.json({message: "Historia Medica borrado con exito"});
    } catch{
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    
  }


  export const getHistoriam = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const historiam = await Historiam.findOneBy({id: parseInt(id)})
    return res.json(historiam)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    }


  export const getPersonHistoria = async (req: Request, res: Response) => {
    //const {id} = req.params
    const {identificacion} = req.body

    try {
      const guarda_historiam = await Historiam.find()
      const buscar_persona = guarda_historiam.filter(x => x.phistoria.person.identificacion === identificacion)

   return res.json(buscar_persona) 
   } catch (error) {
     if(error instanceof Error) {
       return res.status(500).json({mesagge: error.message})
     }
   }
  }