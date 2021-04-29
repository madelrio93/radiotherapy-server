import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLDate } from 'graphql-iso-date';

import { PrimaryId } from '../../../shared';
import { Status, TREATMENTS_FILES } from '../../../constants';
import { Patient } from './patient.entity';
import { Specialist } from '../../specialist/entities/specialist.entity';
import { Equipment } from '../../equipment/entities/equipment.entity';
import { Location } from '../../location/entities/location.entity';
import { Origin } from '../../origin/entities/origin.entity';
import { Stage } from '../../stage/entities/stage.entity';

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
    {
      nullable: false,
      cascade: true,
    }
  )
  speciaList: Promise<Specialist>;

  @Field(() => Equipment)
  @ManyToOne(
    () => Equipment,
    (equipment: Equipment) => equipment.treatmentsFiles,
    {
      nullable: false,
      cascade: true,
    }
  )
  equipment: Promise<Equipment>;

  @Field(() => Location)
  @ManyToOne(() => Location, (location: Location) => location.treatmentsFiles, {
    nullable: false,
    cascade: true,
  })
  location: Promise<Location>;

  @Field(() => Origin)
  @ManyToOne(() => Origin, (location: Origin) => location.treatmentsFiles, {
    nullable: false,
    cascade: true,
  })
  origin: Promise<Origin>;

  @Field(() => Stage)
  @ManyToOne(() => Stage, (location: Stage) => location.treatmentsFiles, {
    nullable: false,
    cascade: true,
  })
  stage: Promise<Stage>;

  /*
    @ManyToOne(() => Stage, (stage: Stage) => stage.treatmentFile, { eager: true, nullable: false })
    stage: Stage;
*/
}
