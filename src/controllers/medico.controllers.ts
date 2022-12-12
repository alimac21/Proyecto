import { error } from "console";
import { Medico } from "../entities/medico";
import { Response, Request } from "express";

export const createMedico = async (req: Request, res: Response) => {
  try {
     const {estudio} = req.body
    
     const medico = new Medico()
     medico.estudio = estudio;
 
     await medico.save();

     return res.json(medico)
   } catch (error){
     if (error instanceof Error){
         return res.status(500).json({message: error.message});
     }
   }
  

}

export const getMedicos = async (req: Request, res: Response) => {
  try {
     const medico = await Medico.find()
  return res.json(medico) 
  } catch (error) {
    if(error instanceof Error) {
      return res.status(500).json({mesagge: error.message})
    }
  }
  
 
}

export const UpdateMedico = async (req: Request, res: Response) => {
  try{
    const {id} = req.params
  
    const user = await Medico.findOneBy({id: parseInt (req.params.id)});
    
  if (!user) return res.status(404).json ({message: 'usuario no existe'});
  
    await Medico.update({id: parseInt(id) }, req.body)
  
    return res.sendStatus(204)
  } catch (error){
    if (error instanceof Error){
      return res.status(500).json({message: error.message});
    }
  }
}
//hngh
export const deleteMedico = async (req: Request, res: Response) =>{
  try{
    const{id} = req.params
    const afected = await Medico.findOneBy({id: parseInt(id)})
  
  const result = await Medico.delete({id: parseInt(id)})

  if(result.affected === 0){
    return res.status(404).json({message:"usuario no existe"})
  }
    return res.json(result);
  } catch{
    if(error instanceof Error){
      return res.status(500).json({message: error.message})
    }
  }
  
}

export const getMedico = async (req: Request, res: Response) => {
  try{
    const {id} = req.params
  const medico = await Medico.findOneBy({id: parseInt(id)})
  return res.json(medico)
  }catch(error){
    if(error instanceof Error){
      return res.status(500).json({message: error.message})
    }
  }
  }