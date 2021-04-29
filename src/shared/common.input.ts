import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateCommonInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;
}

@InputType()
export class UpdateCommonInput extends PartialType(CreateCommonInput) {
  @Field()
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
