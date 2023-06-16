import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class ReportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;
}
