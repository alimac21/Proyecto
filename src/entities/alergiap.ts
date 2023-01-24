import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToMany, ManyToOne} from 'typeorm'
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

@ManyToOne ( () => Person, (person) => person.alergiap)
alergiap:Alergiap;

}