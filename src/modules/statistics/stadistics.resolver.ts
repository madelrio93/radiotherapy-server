import { Resolver, Query } from '@nestjs/graphql';
import { ReadStadisticsDto } from './dto/read-stadistics.dto';
import { StatisticsService } from './statistics.service';

@Resolver()
export class StadisticsResolver {
  constructor(private readonly _stadisticsService: StatisticsService) {}

  @Query(() => ReadStadisticsDto)
  async getStadistics() {
    return await this._stadisticsService.getStadistic();
  }
}
