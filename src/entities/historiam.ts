import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne} from 'typeorm'
import { Person } from './person';

@Entity()
export class Historiam extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar'})
recipe: string;

@Column({type: 'varchar'})
indicaciones: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

/*@ManyToOne ( () => Person, (person) => person.historiam)
person: Person[];*/

}