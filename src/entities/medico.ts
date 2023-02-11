import { join } from 'path';
import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn, OneToMany} from 'typeorm'
import { Historiam } from './historiam';
import { Person } from './person';

@Entity()
export class Medico extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
estudio: string;

@OneToOne ( () => Person, (person) => person.medico, {eager: true})
@JoinColumn()
person: Person;


@OneToMany ( () => Historiam, (historiam) => historiam.medico)
historiam: Historiam;
}