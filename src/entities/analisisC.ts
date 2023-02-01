import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, Column, ManyToOne} from 'typeorm'
import { Coprouro } from './coprouro';

@Entity()
export class AnalisisC extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
resultado: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;


@ManyToOne ( () => Coprouro, (coprouro) => coprouro.analisisC)
coprouro:Coprouro;
}