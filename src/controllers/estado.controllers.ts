import { Response, Request } from "express";
import { Estado } from "../entities/estado";
import { Municipio } from "../entities/municipio";

export const createEstado = async (req: Request, res: Response) => {
  try {
    const {  nombre_estado,municipio} = req.body;

    const estado = new Estado();
    estado.nombre_estado = nombre_estado;
   
    await estado.save();

    return res.json(estado);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getEstado = async (req: Request, res: Response) => {
  try {
    const estado = await Estado.find();

    return res.json(estado);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateEstado = async (req: Request, res: Response) => {
  const { id } = req.params;

  const estado = await Estado.findOneBy({ id: parseInt(id) });
  console.log(estado);

  if (!estado)
    return res.status(404).json({ message: "estado does not exists" });

 const update =  await Estado.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteEstado = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Estado.delete({ id: parseInt(id) });

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
