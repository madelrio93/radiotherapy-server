import { PartialType, InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateSpecialistInput } from './create-specialist.input';

@InputType()
export class UpdateSpecialistInput extends PartialType(CreateSpecialistInput) {
  @Field()
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
