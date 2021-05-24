import { Repository } from 'typeorm';
import { CreateTreatmentFileInput } from '../dto/create-treatment-file.input';
import { PatientInput } from '../dto/patient.input';
import { Patient } from '../entities/patient.entity';
export declare abstract class PatientUtils {
    _patientRepository: Repository<Patient>;
    constructor(_patientRepository: Repository<Patient>);
    findPatientByClinic(treatmentFile: CreateTreatmentFileInput): Promise<number>;
    createPatient(patient: PatientInput): Promise<PatientInput & Patient>;
    deletePatient(id: number): Promise<number>;
}
