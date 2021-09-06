import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { CreateSpecialistInput } from 'src/modules/specialist/dto/create-specialist.input';
import { UpdateSpecialistInput } from 'src/modules/specialist/dto/update-specialist.input';

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
  priority: number;

  @Field()
  @IsString()
  description: string;

  @Field()
  @IsString()
  imageIndication: boolean;

  @Field()
  @IsString()
  @IsNotEmpty()
  status: Status;

  @Field(() => PatientInput)
  @IsNotEmpty()
  patient: PatientInput;

  @Field()
  @IsNotEmpty()
  speciaList: UpdateSpecialistInput;

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
