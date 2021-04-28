import { Repository } from 'typeorm';
import { CreateTreatmentFileInput } from '../dto/create-treatment-file.input';
import { PatientInput } from '../dto/patient.input';

import { Patient } from '../entities/patient.entity';

export abstract class PatientUtils {
  constructor(public _patientRepository: Repository<Patient>) {}

  public async findPatientByClinic(
    treatmentFile: CreateTreatmentFileInput
  ): Promise<number> {
    const patient = await this._patientRepository.findOne({
      where: {
        clinic: treatmentFile.patient.clinic,
      },
    });
    if (patient) {
      return patient.id;
    } else {
      return 0;
    }
  }

  public async createPatient(patient: PatientInput) {
    return await this._patientRepository.save(patient);
  }

  public async deletePatient(id: number): Promise<number> {
    return (await this._patientRepository.delete(id)).affected;
  }
}
