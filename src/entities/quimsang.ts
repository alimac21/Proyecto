import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToMany} from 'typeorm'
import { AnalisisQ } from './analisisQ';
import { Tquimsang } from './tquimsang';

@Entity()
export class Quimsang extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'date'})
fecha: Date;

@ManyToOne ( () => Tquimsang, (tquimsang) => tquimsang.quimsang, {eager: true})
tquimsang: Tquimsang;

@OneToMany ( () => AnalisisQ, (analisisQ) => analisisQ.quimsang)
analisisQ: AnalisisQ[];
} 