import { Field, ObjectType } from '@nestjs/graphql';
import { ReadStadisticsTBEDto } from './read-statistics-treaty-by-equipment.dto';

@ObjectType()
export class ReadStadisticsWithImageIndication extends ReadStadisticsTBEDto {
  @Field()
  image_indication: boolean;
}
