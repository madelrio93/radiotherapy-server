import { Column, Entity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

import { PrimaryId } from '../../../shared';

@ObjectType()
@Entity('treatments-files')
export class TreatmentFile extends PrimaryId {
  @Field(() => String)
  @Column('varchar', { name: 'status' })
  status: string;
}
