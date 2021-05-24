import { Status } from '../../../constants';
import { UpdateCommonInput } from '../../../shared';
import { PatientInput } from './patient.input';
export declare class CreateTreatmentFileInput {
    consultationDate: Date;
    status: Status;
    patient: PatientInput;
    speciaList: UpdateCommonInput;
    equipment: UpdateCommonInput;
    location: UpdateCommonInput;
    stage: UpdateCommonInput;
    origin: UpdateCommonInput;
}
