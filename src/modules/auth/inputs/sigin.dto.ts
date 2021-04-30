import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class SignInDto {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  username: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  password: string;
}
