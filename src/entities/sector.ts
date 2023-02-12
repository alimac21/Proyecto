import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comunidad } from "./comunidad";
import { Person } from "./person";

@Entity()
export class Sector extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_sector: string;
      
  @ManyToOne( () => Comunidad, (comunidad) => comunidad.sector, {eager: true})
  comunidad: Comunidad;

  @OneToMany ( () => Person, (person) => person.sector)
  person:Person;
}