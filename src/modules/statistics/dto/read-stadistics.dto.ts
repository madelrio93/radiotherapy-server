import { Field, ObjectType } from '@nestjs/graphql';
import { IStatistics } from '../interfaces';

@ObjectType()
export class ReadStadisticsDto implements IStatistics {
  @Field()
  all: number;

  @Field()
  treaty: number;

  @Field()
  notTreated: number;

  @Field()
  waiting: number;

  @Field()
  inTreatment: number;
}
