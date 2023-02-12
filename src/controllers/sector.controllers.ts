import { Response, Request } from "express";
import { Comunidad } from "../entities/comunidad";
import { Sector } from "../entities/sector";

export const createSector = async (req: Request, res: Response) => {
  try {
    const {  nombre_sector, comunidad} = req.body;

    const sector = new Sector();
    sector.nombre_sector = nombre_sector;
    sector.comunidad = comunidad;
 
    const validar_comunidad = await Comunidad.findOne({where:{id:comunidad}});

    if(!validar_comunidad){
      return res.status(500).json({ message: "no se encontro"});
    
    }

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

  const { comunidad_id } = req.query;
    

    const sector =  Sector.createQueryBuilder("m").leftJoinAndSelect('m.comunidad', 'comunidad').where('1 = 1');
    if(comunidad_id) {
      sector.andWhere('m.comunidadId = :comunidad_id', {comunidad_id});
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
      return res.status(404).json({ message: "comunidad not found" });
    }

    return res.status(201).json({ message: "Se ha borrado exitosamente" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
