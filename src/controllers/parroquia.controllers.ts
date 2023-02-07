import { Response, Request } from "express";
import { Municipio } from "../entities/municipio";
import { Parroquia } from "../entities/parroquia";

export const createParroquia = async (req: Request, res: Response) => {
  try {
    const {  nombre_parroquia, municipio} = req.body;

    const parroquia = new Parroquia();
    parroquia.nombre_parroquia = nombre_parroquia;
    parroquia.municipio = municipio;
 
    const validar_municipio = await Municipio.findOne({where:{id:municipio}});

    if(!validar_municipio){
      return res.status(500).json({ message: "no se encontro"});
    }


    await parroquia.save();

    return res.json(parroquia);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getParroquia = async (req: Request, res: Response) => {
  try {

    const { municipio_id } = req.query;
    

    const parroquia =  Parroquia.createQueryBuilder("m").leftJoinAndSelect('m.municipio', 'municipio').where('1 = 1');
    if(municipio_id) {
      parroquia.andWhere('m.municipioId = :municipio_id', {municipio_id});
  }
    

    return res.json(await parroquia.getMany() );
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateParroquia = async (req: Request, res: Response) => {
  const { id } = req.params;

  const parroquia = await Parroquia.findOneBy({ id: parseInt(id) });
  console.log(parroquia);

  if (!parroquia)
    return res.status(404).json({ message: "estado does not exists" });

 const update =  await Parroquia.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteParroquia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Parroquia.delete({ id: parseInt(id) });

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
