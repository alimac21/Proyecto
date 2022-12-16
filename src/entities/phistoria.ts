import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm'

@Entity()
export class Phistoria extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
altura: string;

@Column({type: 'varchar'})
peso: string;

@Column({type: 'varchar'})
temperatura: string;

@Column({type: 'varchar'})
N_historia: string;

@Column({type: 'date'})
fecha: Date;

@Column({type: 'varchar'})
tension: string;

@Column({type: 'varchar'})
sintomas: string;

@Column({type: 'varchar'})
razon_visita: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

}