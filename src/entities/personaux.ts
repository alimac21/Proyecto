import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToMany} from 'typeorm'
import { Person } from './person';
import { Phistoria } from './phistoria';

@Entity()
export class Personaux extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
tipo: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

@ManyToOne ( () => Person, (person) => person.personaux)
personaux:Person[];


@OneToMany ( () => Phistoria, (phistoria) => phistoria.personaunx)
phistoria: Phistoria;

@ManyToOne ( () => Person, (person) => person.personaux)
person:Person;
}