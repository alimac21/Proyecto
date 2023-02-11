import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Localidad } from "./localidad";
import { Person } from "./person";

@Entity()
export class Sector extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_sector: string;
      
  @ManyToOne(() => Localidad, (localidad) =>  localidad.sector, {eager: true})
  localidad:Localidad; 

  @OneToMany ( () => Person, (person) => person.sector)
  person:Person;
}