import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

import { Status } from 'src/constants';
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
}
/** @Field()
  @IsNotEmpty()
  speciaList: UpdateNomenclatureDto;

  @Field()
  @IsNotEmpty()
  equipment: UpdateNomenclatureDto;

  @Field()
  @IsNotEmpty()
  location: UpdateNomenclatureDto;

  @Field()
  @IsNotEmpty()
  stage: UpdateNomenclatureDto;

  @Field()
  @IsNotEmpty()
  origin: UpdateNomenclatureDto; */
