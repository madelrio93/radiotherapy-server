import { Column, Entity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

import { PrimaryId } from 'src/shared';
import { TREATMENTS_FILES } from 'src/constants';

@ObjectType()
@Entity(TREATMENTS_FILES)
export class TreatmentFile extends PrimaryId {
  @Field(() => String)
  @Column('varchar', { name: 'status' })
  status: string;
}
