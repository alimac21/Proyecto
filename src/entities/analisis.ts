import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne} from 'typeorm'
import { Historiam } from './historiam';
import { Tcoprouro } from './tcoprouro';
import { Timg } from './timg';
import { Tquimsang } from './tquimsang';

@Entity()
export class Analisis extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@ManyToOne ( () => Historiam, (historiam) => historiam.analisis, {eager: true})
historiam:Historiam;

@ManyToOne ( () => Tquimsang, (tquimsang) => tquimsang.analisis, {eager: true})
tquimsang:Tquimsang;

@ManyToOne ( () => Tcoprouro, (tcoprouro) => tcoprouro.analisis, {eager: true})
tcoprouro:Tcoprouro;

@ManyToOne ( () => Timg, (timg) =>timg.analisis, {eager: true})
timg:Timg;
  
}