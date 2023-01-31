import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne} from 'typeorm'
import { Person } from './person';

@Entity()
export class Medico extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
estudio: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

@ManyToOne ( () => Person, (person) => person.medico)
person: Person;
}