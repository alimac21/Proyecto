import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToMany} from 'typeorm'
import { AnalisisC } from './analisisC';
import { Tcoprouro } from './tcoprouro';

@Entity()
export class Coprouro extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'date'})
fecha: Date;

@ManyToOne ( () => Tcoprouro, (tcoprouro) => tcoprouro.coprouro, {eager: true})
tcoprouro:Tcoprouro;

@OneToMany ( () => AnalisisC, (analisisC) => analisisC.coprouro)
analisisC:AnalisisC[];

}