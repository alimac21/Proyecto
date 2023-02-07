import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn, OneToMany} from 'typeorm'
import { Analisis } from './analisis';
import { Enfermedad } from './enfermedad';
import { Enfermedadp } from './enfermedadp';
import { Person } from './person';
import { Phistoria } from './phistoria';

@Entity()
export class Historiam extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
recipe: string;

@Column({type: 'varchar'})
indicaciones: string;

@OneToOne ( () => Phistoria, (phistoria) => phistoria.historiam, {eager: true})
@JoinColumn()
phistoria: Phistoria;
 
@OneToMany ( () => Analisis, (analisis) => analisis.historiam)
analisis:Analisis[];

@OneToMany ( () => Enfermedadp, (enfermedadp) => enfermedadp.historiam)
enfermedadp:Enfermedadp[];
}