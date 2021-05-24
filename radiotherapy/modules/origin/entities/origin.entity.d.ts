import { TreatmentFile } from '../../treatment-file/entities/treatment-file.entity';
import { Common } from '../../../shared';
export declare class Origin extends Common {
    treatmentsFiles: Promise<TreatmentFile[]>;
}
