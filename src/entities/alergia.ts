import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne} from 'typeorm'
import { Alergiap } from './alergiap';

@Entity()
export class Alergia extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
tipo: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

@ManyToOne ( () => Alergiap, (alergiap) => alergiap.alergia)
alergiap: Alergiap[]; 


}