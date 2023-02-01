import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany} from 'typeorm'
import { Analisis } from './analisis';
import { Quimsang } from './quimsang';

@Entity()
export class Tquimsang extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
nombre: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

@OneToMany ( () => Quimsang, (quimsang) => quimsang.tquimsang)
quimsang: Quimsang[];

@OneToMany ( () => Analisis, (analisis) => analisis.tquimsang)
analisis:Analisis[];

}