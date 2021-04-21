import { Field, ObjectType } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { PrimaryId } from './primaryId';

@ObjectType()
export class Common extends PrimaryId {
  @Field()
  @Column()
  name: string;
}
