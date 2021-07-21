import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReadStadisticsDto {
  @Field()
  all: number;

  @Field()
  treaty: number;

  @Field()
  notTreated: number;

  @Field()
  lastYear: number;
}
