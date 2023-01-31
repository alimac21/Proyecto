import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToMany, ManyToOne, OneToMany} from 'typeorm'
import { Alergia } from './alergia';
import { Person } from './person';

@Entity()
export class Alergiap extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
gravedad: string;

@Column({type: 'date'})
fecha: Date;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

@OneToMany ( () => Person, (person) => person.alergiap)
person:Person[];

@OneToMany ( () => Alergia, (alergia) => alergia.alergiap)
alergia: Alergia; 


}