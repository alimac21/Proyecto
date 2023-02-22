import { compareSync, genSalt, hash } from "bcrypt";
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,BaseEntity, BeforeInsert, BeforeUpdate, OneToOne, JoinColumn,} from"typeorm";
import { Person } from './person';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true})
  email: string;

  @Column({ type: 'varchar'})
  password: string;

  @Column({default: true})
  active: boolean;

  @CreateDateColumn({ type: `date` })
  createdAt!: Date;

  @UpdateDateColumn({ type: `date` })
  updatedAd!: Date;

  @OneToOne(() => Person, (person) => person.user,{nullable:true})
  @JoinColumn()
  person: Person;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await User.setHashPassword(this.password);
  }

  static async setHashPassword(password: string) {
    const salt = await genSalt();
    return await hash(password, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    return compareSync(password, this.password);
  }

}
