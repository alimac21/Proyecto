import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToMany} from 'typeorm'
import { Alergiap } from './alergiap';

@Entity()
export class Alergia extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
tipo: string;

@OneToMany ( () => Alergiap, (alergiap) => alergiap.alergia)
alergiap: Alergiap[]; 


}