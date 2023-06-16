import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export default class UserEntity {
  @PrimaryColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  birthDate: Date;

  // @AfterInsert()
  // logInsert() {
  //   console.log('ok');
  // }

  // @AfterUpdate()
  // logUpdate() {
  //   console.log('ok');
  // }

  // @AfterRemove()
  // logRemove() {
  //   console.log('ok');
  // }
}
