import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Municipio } from "./municipio";



@Entity("Parroquia")
export class Parroquia extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_parroquia: string;

      
  @ManyToOne(() => Municipio, (municipio) =>  municipio.parroquia)
  municipio:Municipio;

}