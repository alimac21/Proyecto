import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Municipio } from "./municipio";


@Entity("Estado")
export class Estado extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_estado: string;

  @OneToMany(() => Municipio, (municipio) =>  municipio.estado)
  municipio:Municipio[];

}
