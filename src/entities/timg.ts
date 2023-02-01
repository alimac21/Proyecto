import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany} from 'typeorm'
import { Analisis } from './analisis';
import { Img } from './img';
import { Quimsang } from './quimsang';

@Entity()
export class Timg extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
nombre: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

@OneToMany ( () => Img, (img) => img.timg)
img:Img[];

@OneToMany ( () => Analisis, (analisis) => analisis.timg)
analisis:Analisis[];

}