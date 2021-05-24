import { Repository } from 'typeorm';
import { CreateTreatmentFileInput } from './dto/create-treatment-file.input';
import { UpdateTreatmentFileInput } from './dto/update-treatment-file.input';
import { Patient } from './entities/patient.entity';
import { TreatmentFile } from './entities/treatment-file.entity';
import { PatientUtils } from './utils/patients';
export declare class TreatmentFileService extends PatientUtils {
    private readonly _treatmentFileRepository;
    readonly _patientRepository: Repository<Patient>;
    constructor(_treatmentFileRepository: Repository<TreatmentFile>, _patientRepository: Repository<Patient>);
    create(treatmentFile: CreateTreatmentFileInput): Promise<TreatmentFile>;
    findAll(): Promise<[TreatmentFile[], number]>;
    findOne(id: number): Promise<TreatmentFile>;
    update(updateTreatmentFile: UpdateTreatmentFileInput): Promise<TreatmentFile>;
    remove(id: number): Promise<number>;
    findBetweenDates(dates: Date[]): Promise<[TreatmentFile[], number]>;
    findByDate(date: Date): Promise<[TreatmentFile[], number]>;
}
