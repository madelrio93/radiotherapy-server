import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TREATMENT_FILE_NOT_FOUND } from '../../constants';
import { CreateTreatmentFileInput } from './dto/create-treatment-file.input';
import { UpdateTreatmentFileInput } from './dto/update-treatment-file.input';
import { Patient } from './entities/patient.entity';
import { TreatmentFile } from './entities/treatment-file.entity';
import { PatientUtils } from './utils/patients';

@Injectable()
export class TreatmentFileService extends PatientUtils {
  constructor(
    @InjectRepository(TreatmentFile)
    private readonly _treatmentFileRepository: Repository<TreatmentFile>,
    @InjectRepository(Patient)
    public readonly _patientRepository: Repository<Patient>
  ) {
    super(_patientRepository);
  }

  public async create(treatmentFile: CreateTreatmentFileInput) {
    const patientId = await this.findPatientByClinic(treatmentFile);
    patientId && (treatmentFile.patient.id = patientId);

    const treatment = new TreatmentFile();
    treatment.consultationDate = treatmentFile.consultationDate;
    treatment.status = treatmentFile.status;
    treatment.patient = Promise.resolve({
      ...treatmentFile.patient,
    } as Patient);

    return await this._treatmentFileRepository.save(treatment);
  }

  public async findAll(): Promise<TreatmentFile[]> {
    return await this._treatmentFileRepository.find();
  }

  public async findOne(id: number): Promise<TreatmentFile> {
    const treatmentFile = await this._treatmentFileRepository.findOne(id);

    if (!treatmentFile) throw new NotFoundException(TREATMENT_FILE_NOT_FOUND);

    return treatmentFile;
  }

  public async update(
    updateTreatmentFile: UpdateTreatmentFileInput
  ): Promise<TreatmentFile> {
    const { id } = updateTreatmentFile;
    this.findOne(id);
    updateTreatmentFile.patient.id &&
      (await this.createPatient(updateTreatmentFile.patient));
    return await this._treatmentFileRepository.save({
      ...updateTreatmentFile,
    } as unknown);
  }

  public async remove(id: number) {
    const treatmentFile = this.findOne(id);
    const treatment = await this._treatmentFileRepository.find({
      where: {
        patient: (await (await treatmentFile).patient).id,
      },
    });
    if (treatment.length === 1)
      return await this.deletePatient((await (await treatmentFile).patient).id);

    return (await this._treatmentFileRepository.delete(id)).affected;
  }
}
