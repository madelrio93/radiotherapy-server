import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLDate } from 'graphql-iso-date';

import { PrimaryId } from '../../../shared';
import { Status, TREATMENTS_FILES } from '../../../constants';
import { Patient } from './patient.entity';

@ObjectType()
@Entity(TREATMENTS_FILES)
export class TreatmentFile extends PrimaryId {
  @Field(() => GraphQLDate)
  @CreateDateColumn({ nullable: false, name: 'create_at' })
  createAt: Date;

  @Field(() => GraphQLDate)
  @Column('date')
  consultationDate: Date;

  @Field()
  @Column('enum', { name: 'status', enum: Status })
  status: Status;

  @Field(() => Patient)
  @ManyToOne(() => Patient, (patient: Patient) => patient.treatmentsFiles, {
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    nullable: false,
  })
  patient: Promise<Patient>;
}
