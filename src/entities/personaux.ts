import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToMany, OneToOne, JoinColumn} from 'typeorm'
import { AnalisisC } from './analisisC';
import { Person } from './person';
import { Phistoria } from './phistoria';

@Entity()
export class Personaux extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
tipo: string;

@OneToMany ( () => Phistoria, (phistoria) => phistoria.personaux)
phistoria: Phistoria;

@OneToOne ( () => Person, (person) => person.personaux, {eager: true})
@JoinColumn()
person: Person;

@OneToMany ( () => AnalisisC, (analisisC) => analisisC.personaux)
analisisC : AnalisisC;
}