import { BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PrimaryId extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
}
