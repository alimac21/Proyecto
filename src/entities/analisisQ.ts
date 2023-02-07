import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, Column, ManyToMany, ManyToOne} from 'typeorm'
import { Quimsang } from './quimsang';

@Entity()
export class AnalisisQ extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
resultado: string;

@ManyToOne( () => Quimsang, (quimsang) => quimsang.analisisQ)
quimsang: Quimsang;
}