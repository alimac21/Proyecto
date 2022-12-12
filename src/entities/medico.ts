import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm'

@Entity()
export class Medico extends BaseEntity {
  @PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
estudio: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

}