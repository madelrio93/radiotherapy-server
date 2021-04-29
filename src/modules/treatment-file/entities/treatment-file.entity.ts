import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLDate } from 'graphql-iso-date';

import { PrimaryId } from '../../../shared';
import { Status, TREATMENTS_FILES } from '../../../constants';
import { Patient } from './patient.entity';
import { Specialist } from '../../specialist/entities/specialist.entity';
import { Equipment } from 'src/modules/equipment/entities/equipment.entity';

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

  @Field(() => Specialist)
  @ManyToOne(
    () => Specialist,
    (specialist: Specialist) => specialist.treatmenstFiles,
    { nullable: false, cascade: true }
  )
  speciaList: Promise<Specialist>;

  @Field(() => Equipment)
  @ManyToOne(
    () => Equipment,
    (equipment: Equipment) => equipment.treatmentsFiles,
    { nullable: false, cascade: true }
  )
  equipment: Promise<Equipment>;

  /* @ManyToOne(() => Equipment, (equipment: Equipment) => equipment.treatmentFile, { eager: true, nullable: false })
    equipment: Equipment;

    @ManyToOne(() => Location, (location: Location) => location.treatmentFile, { eager: true, nullable: false })
    location: Location;

    @ManyToOne(() => Stage, (stage: Stage) => stage.treatmentFile, { eager: true, nullable: false })
    stage: Stage;

    @ManyToOne(() => Origin, (origin: Origin) => origin.treatmentFile, { eager: true, nullable: false })
    origin: Origin*/
}
