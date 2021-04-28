import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { Sex } from '../../../constants';

@InputType()
export class Patient {
  @Field()
  id: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @Field()
  @IsString()
  @Length(11)
  @IsNotEmpty()
  clinic: string;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  age: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  phone: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  municipality: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  province: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  address: string;

  @Field()
  @IsNotEmpty()
  sex: Sex;
}

@InputType()
export class PatientInput extends PartialType(Patient) {}
