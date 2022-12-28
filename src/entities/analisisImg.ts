import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, Column} from 'typeorm'

@Entity()
export class AnalisisImg extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
resultado: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

}