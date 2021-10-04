import { Resolver, Query, ID, Args } from '@nestjs/graphql';
import { ReadStadisticsTBEDto } from './dto/read-statistics-treaty-by-equipment.dto';
import { ReadStadisticsDto } from './dto/read-stadistics.dto';
import { StatisticsService } from './statistics.service';
import { ReadStadisticsWithImageIndication } from './dto/read-statistic-with-image-indication.dto';

@Resolver()
export class StadisticsResolver {
  constructor(private readonly _stadisticsService: StatisticsService) {}

  @Query(() => ReadStadisticsDto)
  async getStatisticsByStatus() {
    return await this._stadisticsService.getStatisticsByStatus();
  }

  @Query(() => [ReadStadisticsTBEDto])
  async getStadisticTreatyByEquipment(
    @Args('id', { type: () => ID }) id: number
  ) {
    const data = await this._stadisticsService.getStadisticTreatyByEquipment(
      id
    );
    return data;
  }

  @Query(() => [ReadStadisticsWithImageIndication])
  async getStadisticWithImageIndication() {
    const data = [
      ...(await this._stadisticsService.getStatisticWithImageIndication(true)),
      ...(await this._stadisticsService.getStatisticWithImageIndication(false)),
    ];
    return data;
  }
}
