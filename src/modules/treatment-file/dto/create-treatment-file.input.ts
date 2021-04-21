import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTreatmentFileInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
