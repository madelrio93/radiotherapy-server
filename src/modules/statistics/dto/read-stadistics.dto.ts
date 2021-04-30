import { Field,  ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ReadStadisticsDto {

    @Field()
     all: number;

    @Field()
    lastYear: number;

    @Field()
     lastMonth: number;

    @Field()
    afternoon: number;

    @Field()
    today: number;

}