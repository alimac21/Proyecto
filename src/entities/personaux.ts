import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToMany, OneToOne, JoinColumn} from 'typeorm'
import { Person } from './person';
import { Phistoria } from './phistoria';

@Entity()
export class Personaux extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
tipo: string;

//@ManyToOne ( () => Person, (person) => person.personaux)
//personaux:Person;


@OneToMany ( () => Phistoria, (phistoria) => phistoria.personaunx)
phistoria: Phistoria;

@OneToOne ( () => Person, (person) => person.personaux)
@JoinColumn()
person: Person;
}