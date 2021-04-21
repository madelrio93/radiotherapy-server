import { Column, Entity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

import { PrimaryId } from '../../../shared';
import { Status, TREATMENTS_FILES } from '../../../constants';

@ObjectType()
@Entity(TREATMENTS_FILES)
export class TreatmentFile extends PrimaryId {
  @Field(() => Status)
  @Column('enum', { name: 'status', enum: Status })
  status: Status;
}
