import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity('treatments-files')
export class TreatmentFile {
  @Field(() => String)
  @Column('varchar', { name: 'status' })
  status: string;
}
