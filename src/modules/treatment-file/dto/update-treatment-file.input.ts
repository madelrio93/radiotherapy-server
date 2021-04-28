import { CreateTreatmentFileInput } from './create-treatment-file.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class UpdateTreatmentFileInput extends PartialType(
  CreateTreatmentFileInput
) {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
