import { Sex } from '../../../constants';
export declare class Patient {
    id: number;
    name: string;
    lastName: string;
    clinic: string;
    age: number;
    phone: number;
    municipality: string;
    province: string;
    address: string;
    sex: Sex;
}
declare const PatientInput_base: import("@nestjs/common").Type<Partial<Patient>>;
export declare class PatientInput extends PatientInput_base {
}
export {};
