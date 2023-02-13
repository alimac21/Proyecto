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

@ManyToOne ( () => Person, (person) => person.alergiap, {eager: true})
person:Person;

@ManyToOne ( () => Alergia, (alergia) => alergia.alergiap, {eager: true})
alergia: Alergia;  


}