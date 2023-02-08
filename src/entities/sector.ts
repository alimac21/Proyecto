import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Localidad } from "./localidad";



@Entity("Sector")
export class Sector extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_sector: string;

      
  @ManyToOne(() => Localidad, (localidad) =>  localidad.sector)
  localidad:Localidad;
}