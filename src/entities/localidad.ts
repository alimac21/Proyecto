import { BaseEntity, Column, Entity, ManyToOne,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Parroquia } from "./parroquia"; 
import { Sector } from "./sector";

@Entity()
export class Localidad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_localidad: string;

    
  @ManyToOne(() => Parroquia, (parroquia) =>  parroquia.municipio)
  parroquia:Parroquia;

  @OneToMany(() => Sector, (sector) =>  sector.localidad)
  sector: Sector[];

}