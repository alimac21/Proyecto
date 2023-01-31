import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne} from 'typeorm'
import { Tquimsang } from './tquimsang';

@Entity()
export class Quimsang extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'date'})
fecha: Date;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

@ManyToOne ( () => Tquimsang, (tquimsang) => tquimsang.quimsang)
tquimsang: Tquimsang;
}