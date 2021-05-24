import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

import { Status } from '../../../constants';
import { UpdateCommonInput } from '../../../shared';
import { PatientInput } from './patient.input';

@InputType()
export class CreateTreatmentFileInput {
  @Field()
  @IsDate()
  @IsNotEmpty()
  consultationDate: Date;

  @Field()
  @IsString()
  @IsNotEmpty()
  status: Status;

  @Field(() => PatientInput)
  @IsNotEmpty()
  patient: PatientInput;

  @Field()
  @IsNotEmpty()
  speciaList: UpdateCommonInput;

  @Field()
  @IsNotEmpty()
  equipment: UpdateCommonInput;

  @Field()
  @IsNotEmpty()
  location: UpdateCommonInput;

  @Field()
  @IsNotEmpty()
  stage: UpdateCommonInput;

  @Field()
  @IsNotEmpty()
  origin: UpdateCommonInput;
}
