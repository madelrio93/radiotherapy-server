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

  @Field()
  @Column('numeric', { name: 'priority' })
  priority: number;

  @Field()
  @Column('varchar', { name: 'description', length: 550 })
  description: string;

  @Field()
  @Column('boolean', { name: 'image_indication', default: false })
  imageIndication: boolean;

  @Field(() => Patient)
  @ManyToOne(() => Patient, (patient: Patient) => patient.treatmentsFiles, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  patient: Promise<Patient>;

  @Field(() => Specialist)
  @ManyToOne(
    () => Specialist,
    (specialist: Specialist) => specialist.treatmenstFiles,
    {
      eager: true,
      nullable: false,
      onUpdate: 'CASCADE',
    }
  )
  speciaList: Specialist;

  @Field(() => Equipment)
  @ManyToOne(
    () => Equipment,
    (equipment: Equipment) => equipment.treatmentsFiles,
    { eager: true, nullable: false, onUpdate: 'CASCADE' }
  )
  equipment: Equipment;

  @Field(() => Location)
  @ManyToOne(() => Location, (location: Location) => location.treatmentsFiles, {
    eager: true,
    nullable: false,
    onUpdate: 'CASCADE',
  })
  location: Location;

  @Field(() => Stage)
  @ManyToOne(() => Stage, (stage: Stage) => stage.treatmentsFiles, {
    eager: true,
    nullable: false,
    onUpdate: 'CASCADE',
  })
  stage: Stage;

  @Field(() => Origin)
  @ManyToOne(() => Origin, (origin: Origin) => origin.treatmentsFiles, {
    eager: true,
    nullable: false,
    onUpdate: 'CASCADE',
  })
  origin: Origin;
}
