import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm'

@Entity()
export class Analisis extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

}