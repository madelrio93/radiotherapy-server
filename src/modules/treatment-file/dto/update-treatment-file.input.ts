import { CreateTreatmentFileInput } from './create-treatment-file.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTreatmentFileInput extends PartialType(CreateTreatmentFileInput) {
  @Field(() => Int)
  id: number;
}
