import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne} from 'typeorm'
import { Historiam } from './historiam';
import { Tcoprouro } from './tcoprouro';
import { Timg } from './timg';
import { Tquimsang } from './tquimsang';

@Entity()
export class Analisis extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAd: Date;

@ManyToOne ( () => Historiam, (historiam) => historiam.analisis)
historiam:Historiam;

@ManyToOne ( () => Tquimsang, (tquimsang) => tquimsang.analisis)
tquimsang:Tquimsang;

@ManyToOne ( () => Tcoprouro, (tcoprouro) => tcoprouro.analisis)
tcoprouro:Tcoprouro;

@ManyToOne ( () => Timg, (timg) =>timg.analisis)
timg:Timg;

}
