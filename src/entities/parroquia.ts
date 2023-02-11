import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Localidad } from "./localidad";
import { Municipio } from "./municipio";



@Entity("Parroquia")
export class Parroquia extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_parroquia: string;

      
  @ManyToOne(() => Municipio, (municipio) =>  municipio.parroquia, {eager: true})
  municipio:Municipio;

  @OneToMany( () => Localidad, (localidad) => localidad.parroquia)
  localidad:Localidad[];

}