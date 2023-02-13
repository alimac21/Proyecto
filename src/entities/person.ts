import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, ManyToOne, OneToOne, JoinColumn} from 'typeorm'
import { Alergiap } from './alergiap';
import { Historiam } from './historiam';
import { Medico } from './medico';
import { Personaux } from './personaux';
import { Phistoria } from './phistoria';
import { Sector } from './sector';
import { User } from './user';

@Entity()
export class Person extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
nombre: string;

@Column({type: 'varchar'})
apellido: string;

@Column({type: 'varchar', unique: true})
identificacion: string;

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

@OneToOne ( () => Personaux, (personaux) => personaux.person)
personaux:Personaux;

@OneToMany ( () => Phistoria, (phistoria) => phistoria.person)
phistoria:Phistoria[];

@OneToMany ( ()  => Alergiap, (alergiap) => alergiap.person, {eager: true})
alergiap:Alergiap;

@OneToOne ( () => Medico, (medico) => medico.person)
medico: Medico;

@OneToMany ( () => Personaux, (personaux) => personaux.person)
person:Person;

@OneToOne ( () => User, (user) => user.person)
user: User;

@ManyToOne ( () => Sector, (sector) => sector.person, {eager: true})
sector:Sector;

}