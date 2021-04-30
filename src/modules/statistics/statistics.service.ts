import { Injectable } from '@nestjs/common';
import moment from 'moment';

import { TreatmentFileService } from '../treatment-file/treatment-file.service';
import { IStatistics } from './interfaces';

@Injectable()
export class StatisticsService {
  constructor(private readonly _treatmentFileService: TreatmentFileService) {}

  /**
   * Get stadistic system
   */
  public async getStadistic() {
    const statistics: IStatistics = {
      all: (await this._treatmentFileService.findAll())[1],
      lastYear: (
        await this._treatmentFileService.findBetweenDates([
          moment().subtract(1, 'years').toDate(),
          moment().toDate(),
        ])
      )[1],
      lastMonth: (
        await this._treatmentFileService.findBetweenDates([
          moment().subtract(1, 'M').toDate(),
          moment().toDate(),
        ])
      )[1],
      afternoon: (
        await this._treatmentFileService.findBetweenDates([
          moment().subtract(1, 'days').toDate(),
          moment().toDate(),
          moment().toDate(),
        ])
      )[1],
      today: (
        await this._treatmentFileService.findByDate(moment().toDate())
      )[1],
    };
    return statistics;
  }
}
