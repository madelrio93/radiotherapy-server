import { Field, ObjectType } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { Common } from './common';

@ObjectType()
export class Person extends Common {
  @Field()
  @Column({ name: 'last_name' })
  lastName: string;
}
