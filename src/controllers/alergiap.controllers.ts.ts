import { error } from "console";
import { Alergiap } from "../entities/alergiap";
import { Response, Request } from "express";
import { Alergia } from "../entities/alergia";
import { Person } from "../entities/person";


export const createAlergiap = async (req: Request, res: Response) => {
    try {
       const {gravedad, fecha, alergia, person} = req.body
      
       const alergiap = new Alergiap()
       alergiap.gravedad = gravedad;
       alergiap.fecha = fecha;
       alergiap.alergia = alergia;
       alergiap.person = person

 
       const validar_alergia = await Alergia.findOneBy({id:parseInt(alergia)});
    

    if(!validar_alergia){
      return res.status(500).json({ message: "no se encontro este registro"});
    }

    const validar_person = await Person.findOneBy({id:parseInt(person)});
    console.log("este es el valor de validar:", validar_person)

    if(!validar_person){console.log("no se consiguio esta persona")}
    else{
      alergiap.save()
    }

       await alergiap.save();
  
       return res.json(alergiap)
     } catch (error){
       if (error instanceof Error){
           return res.status(500).json({message: error.message});
       }
     }
  }


export const getAlergiaps = async (req: Request, res: Response) => {
    try {
       const alergiap = await Alergiap.find()
    return res.json(alergiap) 
    } catch (error) {
      if(error instanceof Error) {
        return res.status(500).json({mesagge: error.message})
      }
    }
  
  }


  export const UpdateAlergiap = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    
      const user = await Alergiap.findOneBy({id: parseInt (req.params.id)});
      
    if (!user) return res.status(404).json ({message: 'usuario no existe'});
    
      await Alergiap.update({id: parseInt(id) }, req.body)
    
      return res.sendStatus(204)
    } catch (error){
      if (error instanceof Error){
        return res.status(500).json({message: error.message});
      }
    }
  }

export const deleteAlergiap = async (req: Request, res: Response) =>{
    try{
      const{id} = req.params
      const prueba = 5;
      const afected = await Alergiap.findOneBy({id: parseInt(id)})
    
    const result = await Alergiap.delete({id: parseInt(id)})
  
    if(result.affected === 0){
      return res.status(404).json({message:"usuario no existe"})
    }
      return res.json({message: "Alergia borrado con exito"});
    } catch{
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
    
  }


export const getAlergiap = async (req: Request, res: Response) => {
    try{
      const {id} = req.params
    const alergiap = await Alergiap.findOneBy({id: parseInt(id)})
    return res.json(alergiap)
    }catch(error){
      if(error instanceof Error){
        return res.status(500).json({message: error.message})
      }
    }
  }