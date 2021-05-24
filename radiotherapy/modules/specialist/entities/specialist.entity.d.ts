import { TreatmentFile } from '../../treatment-file/entities/treatment-file.entity';
import { Person } from '../../../shared/person';
export declare class Specialist extends Person {
    treatmenstFiles: Promise<TreatmentFile[]>;
}
