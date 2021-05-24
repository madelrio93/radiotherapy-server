import { TreatmentFileService } from '../treatment-file/treatment-file.service';
import { IStatistics } from './interfaces';
export declare class StatisticsService {
    private readonly _treatmentFileService;
    constructor(_treatmentFileService: TreatmentFileService);
    getStadistic(): Promise<IStatistics>;
}
