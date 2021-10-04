import { Field, ObjectType } from '@nestjs/graphql';
import { IStatistics } from '../interfaces';

@ObjectType()
export class ReadStadisticsTBEDto {
  @Field()
  year: number;

  @Field()
  value: number;
}
