import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm'
import { EnumType } from 'typescript';

@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
nombre: string;

@Column({type: 'varchar'})
apellido: string;

@Column({type: 'varchar'})
identificacion: number;

@Column({type: 'date'})
fecha_de_nacimiento: Date;

@Column({type: 'varchar'})
direccion: string;

@Column({type: 'varchar'})
tipo_sangre: string;

@Column({type: 'varchar'})
sexo: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

}