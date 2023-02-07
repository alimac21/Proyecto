import { Response, Request } from "express";
import { Estado } from "../entities/estado";
import { Municipio } from "../entities/municipio";
import { Parroquia } from "../entities/parroquia";

export const createMunicipio = async (req: Request, res: Response) => {
  try {
    const {  nombre_municipio, estado} = req.body;

    const municipio = new Municipio();
    municipio.nombre_municipio = nombre_municipio;
    municipio.estado = estado;
 
    const validar_estado = await Estado.findOne({where:{id:estado}});
    if(!validar_estado){
      return res.status(500).json({ message: "no se encontro"});
    }

    await municipio.save();

    return res.json(municipio);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getMunicipio = async (req: Request, res: Response) => {
  try {
    const { estado_id } = req.query;
    

    const municipio =  Municipio.createQueryBuilder("i").leftJoinAndSelect('i.estado', 'estado').where('1 = 1');
    if(estado_id) {
      municipio.andWhere('i.estadoId = :estado_id', {estado_id});
  }

    return res.json(await  municipio.getMany()) ;
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateMunicipio = async (req: Request, res: Response) => {
  const { id } = req.params;

  const municipio = await Municipio.findOneBy({ id: parseInt(id) });
  console.log(municipio);

  if (!municipio)
    return res.status(404).json({ message: "estado does not exists" });

 const update =  await Municipio.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteMunicipio = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Municipio.delete({ id: parseInt(id) });

    if (result.affected === 0) {
      return res.status(404).json({ message: "Municipio not found" });
    }

    return res.status(201).json({ message: "Se ha borrado exitosamente" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};