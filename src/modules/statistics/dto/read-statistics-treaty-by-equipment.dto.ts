import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReadStadisticsTBEDto {
  @Field()
  year: number;

  @Field()
  value: number;
}
