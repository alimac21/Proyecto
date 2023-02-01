import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, ManyToOne, OneToOne} from 'typeorm'
import { Historiam } from './historiam';
import { Person } from './person';
import { Personaux } from './personaux';

@Entity()
export class Phistoria extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
altura: string;

@Column({type: 'varchar'})
peso: string;

@Column({type: 'varchar'})
temperatura: string;

@Column({type: 'varchar'})
N_historia: string;

@Column({type: 'date'})
fecha: Date;

@Column({type: 'varchar'})
tension: string;

@Column({type: 'varchar'})
sintomas: string;

@Column({type: 'varchar'})
razon_visita: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

@ManyToOne ( () => Person, (person) => person.phistoria)
person:Person;

@OneToOne ( () => Historiam, (historiam) => historiam.historiam)
historiam:Phistoria;

@ManyToOne ( () => Personaux, (personaux) => personaux.phistoria)
personaunx:Personaux;

}