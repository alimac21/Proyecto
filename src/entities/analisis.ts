import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne} from 'typeorm'
import { Historiam } from './historiam';

@Entity()
export class Analisis extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

@ManyToOne ( () => Historiam, (historiam) => historiam.analisis)
historiam:Historiam;

}