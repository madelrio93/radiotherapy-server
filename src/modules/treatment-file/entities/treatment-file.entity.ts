import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TreatmentFile {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
