import { TreatmentFile } from '../../treatment-file/entities/treatment-file.entity';
import { Common } from '../../../shared';
export declare class Location extends Common {
    treatmentsFiles: Promise<TreatmentFile[]>;
}
