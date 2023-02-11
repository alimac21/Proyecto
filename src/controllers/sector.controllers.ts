import { Response, Request } from "express";
import { Localidad } from "../entities/localidad";
import { Sector } from "../entities/sector";

export const createSector = async (req: Request, res: Response) => {
  try {
    const {  nombre_sector, localidad} = req.body;

    const sector = new Sector();
    sector.nombre_sector = nombre_sector;
    sector.localidad = localidad;
 
    /*const validar_localidad = await Localidad.findOne({where:{id:localidad}});

    if(!validar_localidad){
      return res.status(500).json({ message: "no se encontro"});
    }*/


    await sector.save();

    return res.json(sector);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getSector = async (req: Request, res: Response) => {
  try {

  const { localidad_id } = req.query;
    

    const sector =  Sector.createQueryBuilder("m").leftJoinAndSelect('m.localidad', 'localidad').where('1 = 1');
    if(localidad_id) {
      sector.andWhere('m.localidadId = :localidad_id', {localidad_id});
  }
    

    return res.json(await sector.getMany() );
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateSector = async (req: Request, res: Response) => {
  const { id } = req.params;

  const sector = await Sector.findOneBy({ id: parseInt(id) });
  console.log(sector);

  if (!sector)
    return res.status(404).json({ message: "estado does not exists" });

 const update =  await Sector.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteSector = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Sector.delete({ id: parseInt(id) });

    if (result.affected === 0) {
      return res.status(404).json({ message: "localidad not found" });
    }

    return res.status(201).json({ message: "Se ha borrado exitosamente" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
