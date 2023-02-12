import { Response, Request } from "express";
import { Comunidad } from "../entities/comunidad";


export const createComunidad = async (req: Request, res: Response) => {
  try {
    const {  nombre_comunidad, } = req.body;

    const comunidad = new Comunidad();
    comunidad.nombre_comunidad = nombre_comunidad;
   
    await comunidad.save();

    return res.json(comunidad);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getComunidad = async (req: Request, res: Response) => {
    try {
      const comunidad = await Comunidad.find();
  
      return res.json(comunidad);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

export const updateComunidad = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const comunidad = await Comunidad.findOneBy({ id: parseInt(id) });
    console.log(comunidad);
  
    if (!comunidad)
      return res.status(404).json({ message: "comunidad does not exists" });
  
   const update =  await Comunidad.update({ id: parseInt(id) }, req.body);
  
    return res.json(update);
  };


export const deleteComunidad = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const result = await Comunidad.delete({ id: parseInt(id) });
  
      if (result.affected === 0) {
        return res.status(404).json({ message: "Estadp not found" });
      }
  
      return res.status(201).json({ message: "Se ha borrado exitosamente" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };