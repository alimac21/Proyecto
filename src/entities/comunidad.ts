import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Parroquia } from "./parroquia";
import { Sector } from "./sector";


@Entity()
export class Comunidad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_comunidad: string;

  @ManyToOne ( () => Parroquia, (parroquia) => parroquia.comunidad, {eager: true})
  parroquia: Parroquia;

  @OneToMany( () => Sector, (sector) => sector.comunidad)
  sector: Sector;
}