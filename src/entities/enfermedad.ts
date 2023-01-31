import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany} from 'typeorm'
import { Enfermedadp } from './enfermedadp';

@Entity()
export class Enfermedad extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
nombre: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;


@OneToMany ( () => Enfermedadp, (enfermedadp) => enfermedadp.enfermedad)
enfermedadp:Enfermedadp;
}