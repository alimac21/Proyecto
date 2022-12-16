import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm'

@Entity()
export class Enfermera extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

}