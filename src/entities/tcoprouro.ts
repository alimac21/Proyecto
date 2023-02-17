import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany} from 'typeorm'
import { Analisis } from './analisis';
import { Coprouro } from './coprouro';

@Entity()
export class Tcoprouro extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
nombre: string;

@OneToMany ( () => Coprouro, (coprouro) => coprouro.tcoprouro)
coprouro:Coprouro[];

@OneToMany ( () => Analisis, (analisis) => analisis.tcoprouro)
analisis: Analisis[];

} 