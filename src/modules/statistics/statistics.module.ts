import { Module } from '@nestjs/common';

import { StatisticsService } from './statistics.service';
import { StadisticsResolver } from './stadistics.resolver';
import { TreatmentFileModule } from '../treatment-file/treatment-file.module';

@Module({
  imports: [TreatmentFileModule],
  providers: [StatisticsService, StadisticsResolver],
})
export class StatisticsModule {}
