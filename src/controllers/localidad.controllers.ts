import { Response, Request } from "express";
import { Localidad } from "../entities/localidad";
import { Parroquia } from "../entities/parroquia";

export const createLocalidad = async (req: Request, res: Response) => {
  try {
    const {  nombre_localidad, parroquia} = req.body;

    const localidad = new Localidad();
    localidad.nombre_localidad = nombre_localidad;
    localidad.parroquia = parroquia;
 
    const validar_parroquia = await Parroquia.findOne({where:{id:parroquia}});

    if(!validar_parroquia){
      return res.status(500).json({ message: "no se encontro"});
    }


    await localidad.save();

    return res.json(localidad);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getLocalidad = async (req: Request, res: Response) => {
  try {

    const { municipio_id } = req.query;
    

    const localidad =  Localidad.createQueryBuilder("m").leftJoinAndSelect('m.municipio', 'municipio').where('1 = 1');
    if(municipio_id) {
      localidad.andWhere('m.municipioId = :municipio_id', {municipio_id});
  }
    

    return res.json(await localidad.getMany() );
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateLocalidad = async (req: Request, res: Response) => {
  const { id } = req.params;

  const localidad = await Localidad.findOneBy({ id: parseInt(id) });
  console.log(localidad);

  if (!localidad)
    return res.status(404).json({ message: "estado does not exists" });

 const update =  await Localidad.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteLocalidad = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Localidad.delete({ id: parseInt(id) });

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
