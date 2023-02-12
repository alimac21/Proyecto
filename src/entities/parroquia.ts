import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comunidad } from "./comunidad";
import { Municipio } from "./municipio";

@Entity("Parroquia")
export class Parroquia extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_parroquia: string;

      
  @ManyToOne(() => Municipio, (municipio) =>  municipio.parroquia, {eager: true})
  municipio:Municipio;

  @OneToMany ( () => Comunidad, (comunidad) => comunidad.parroquia)
  comunidad: Comunidad;


}