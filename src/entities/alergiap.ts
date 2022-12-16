import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm'

@Entity()
export class Alergiap extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
gravedad: string;

@Column({type: 'date'})
fecha: Date;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

}