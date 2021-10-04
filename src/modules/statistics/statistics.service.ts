import { Injectable } from '@nestjs/common';
import { Status as status } from 'src/constants';

import { TreatmentFileService } from '../treatment-file/treatment-file.service';
import { IStatistics } from './interfaces';

@Injectable()
export class StatisticsService {
  constructor(private readonly _treatmentFileService: TreatmentFileService) {}

  /**
   * Get stadistic system
   */
  public async getStatisticsByStatus() {
    const statistics: IStatistics = {
      all: (await this._treatmentFileService.findAll())[1],
      treaty: (await this._treatmentFileService.findALlByStatus(status.TRATADO))
        .length,
      notTreated: (
        await this._treatmentFileService.findALlByStatus(status.NO_TRATADO)
      ).length,
      waiting: (
        await this._treatmentFileService.findALlByStatus(status.EN_ESPERA)
      ).length,
      inTreatment: (
        await this._treatmentFileService.findALlByStatus(status.EN_TRATAMIENTO)
      ).length,
    };
    return statistics;
  }

  public async getStadisticTreatyByEquipment(id: number) {
    return await this._treatmentFileService.FindTreatyByEquipment(id);
  }

  public async getStatisticWithImageIndication(indication: boolean) {
    return await this._treatmentFileService.findCountWhithImageIndication(
      indication
    );
  }
}
