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
      treaty: (await this._treatmentFileService.findALlByStatus('tratado'))
        .length,
      notTreated: (
        await this._treatmentFileService.findALlByStatus('no tratado')
      ).length,
      lastYear: (
        await this._treatmentFileService.findBetweenDates([
          moment().subtract(1, 'years').toDate(),
          moment().toDate(),
        ])
      )[1],
    };
    return statistics;
  }
}
