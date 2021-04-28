import { Column, Entity, OneToMany } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { PATIENTS, Sex } from '../../../constants';
import { TreatmentFile } from './treatment-file.entity';
import { PrimaryId } from '../../../shared';

@ObjectType()
@Entity(PATIENTS)
export class Patient extends PrimaryId {
  @Field()
  @Column()
  lastname: string;

  @Field()
  @Column()
  clinic: string;

  @Field()
  @Column()
  age: number;

  @Field()
  @Column('enum', { enum: Sex })
  sex: Sex;

  @Field()
  @Column()
  phone: number;

  @Field()
  @Column()
  municipality: string;

  @Field()
  @Column()
  province: string;

  @Field()
  @Column({ nullable: true })
  address: string;

  @Field(() => [TreatmentFile])
  @OneToMany(() => TreatmentFile, (treatmentfile) => treatmentfile.patient)
  treatmentsFiles: Promise<TreatmentFile[]>;
}
