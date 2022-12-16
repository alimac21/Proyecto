import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm'

@Entity()
export class Coprouro extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'date'})
fecha: Date;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

}