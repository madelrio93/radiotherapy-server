import { Sex } from '../../../constants';
import { TreatmentFile } from './treatment-file.entity';
import { Person } from '../../../shared/person';
export declare class Patient extends Person {
    clinic: string;
    age: number;
    sex: Sex;
    phone: number;
    municipality: string;
    province: string;
    address: string;
    treatmentsFiles: Promise<TreatmentFile[]>;
}
