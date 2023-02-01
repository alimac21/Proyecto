import { join } from 'path';
import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn} from 'typeorm'
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

@OneToOne ( () => Person, (person) => person.medico)
@JoinColumn()
person: Person;
}