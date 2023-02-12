import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, Column, ManyToOne} from 'typeorm'
import { Coprouro } from './coprouro';

@Entity()
export class AnalisisC extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
resultado: string;

@ManyToOne ( () => Coprouro, (coprouro) => coprouro.analisisC, {eager: true})
coprouro:Coprouro;
}