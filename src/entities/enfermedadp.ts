import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, ManyToOne} from 'typeorm'
import { Enfermedad } from './enfermedad';
import { Historiam } from './historiam';

@Entity()
export class Enfermedadp extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
nombre: string;

@Column({type: 'varchar'})
tipo: string;

@OneToMany ( () => Historiam, (historiam) => historiam.enfermedadp)
historiam:Historiam[];

@ManyToOne ( () => Enfermedad, (enfermedad) => enfermedad.enfermedadp, {eager: true})
enfermedad: Enfermedad;



} 