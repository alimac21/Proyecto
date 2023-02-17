import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, Column, ManyToOne} from 'typeorm'
import { Img } from './img';

@Entity()
export class AnalisisImg extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
resultado: string;

@ManyToOne ( () => Img, (img) => img.analisisimg, {eager: true})
img:Img;

}