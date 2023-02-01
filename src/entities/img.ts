import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToMany} from 'typeorm'
import { AnalisisImg } from './analisisImg';
import { Timg } from './timg';

@Entity()
export class Img extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'date'})
fecha: Date;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

@ManyToOne ( () => Timg, (timg) => timg.img)
timg:Timg;

@OneToMany ( () => AnalisisImg, (analisisimg) => analisisimg.img)
analisisimg: AnalisisImg[];

}