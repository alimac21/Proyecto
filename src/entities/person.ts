import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, ManyToOne, OneToOne} from 'typeorm'
import { Alergiap } from './alergiap';
import { Historiam } from './historiam';
import { Medico } from './medico';
import { Personaux } from './personaux';
import { Phistoria } from './phistoria';

@Entity()
export class Person extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
nombre: string;

@Column({type: 'varchar'})
apellido: string;

@Column({type: 'varchar', unique: true})
identificacion: number;

@Column({type: 'date'})
fecha_de_nacimiento: Date;

@Column({type: 'varchar'})
direccion: string;

@Column({type: 'varchar'})
tipo_sangre: string;

@Column({type: 'varchar'})
sexo: string;

@Column({type: 'varchar'})
telefono: string;

@Column({type: 'varchar'})
telefono_emergencia: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

@OneToMany ( () => Personaux, (personaux) => personaux.personaux)
personaux:Person;

@OneToMany ( () => Phistoria, (phistoria) => phistoria.person)
phistoria:Person[]; 

@ManyToOne ( ()  => Alergiap, (alergiap) => alergiap.person)
alergiap:Alergiap;

@OneToOne ( () => Medico, (medico) => medico.person)
medico: Medico[];

@OneToMany ( () => Personaux, (personaux) => personaux.person)
person:Person[];
}