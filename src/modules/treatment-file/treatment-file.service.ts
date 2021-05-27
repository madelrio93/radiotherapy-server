import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import moment from 'moment';

import { TREATMENT_FILE_NOT_FOUND } from '../../constants';
import { CreateTreatmentFileInput } from './dto/create-treatment-file.input';
import { UpdateTreatmentFileInput } from './dto/update-treatment-file.input';
import { Patient } from './entities/patient.entity';
import { TreatmentFile } from './entities/treatment-file.entity';
import { PatientUtils } from './utils/patients';
import { Specialist } from '../specialist/entities/specialist.entity';
import { Equipment } from '../equipment/entities/equipment.entity';
import { Origin } from '../origin/entities/origin.entity';
import { Location } from '../location/entities/location.entity';
import { Stage } from '../stage/entities/stage.entity';

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
    treatment.speciaList = Promise.resolve({
      ...treatmentFile.speciaList,
    } as Specialist);
    treatment.equipment = Promise.resolve({
      ...treatmentFile.equipment,
    } as Equipment);
    treatment.location = Promise.resolve({
      ...treatmentFile.location,
    } as Location);
    treatment.origin = Promise.resolve({
      ...treatmentFile.origin,
    } as Origin);
    treatment.stage = Promise.resolve({
      ...treatmentFile.stage,
    } as Stage);

    return await this._treatmentFileRepository.save(treatment);
  }

  public async findAll(): Promise<[TreatmentFile[], number]> {
    return await this._treatmentFileRepository.findAndCount();
  }

  public async findOne(id: number): Promise<TreatmentFile> {
    const treatmentFile = await this._treatmentFileRepository.findOne(id);

    if (!treatmentFile) throw new NotFoundException(TREATMENT_FILE_NOT_FOUND);

    return treatmentFile;
  }

  public async update(
    treatment: UpdateTreatmentFileInput
  ): Promise<TreatmentFile> {
    const { id } = treatment;

    const result = await this.findOne(id);

    treatment?.patient && (await this.createPatient(treatment.patient));

    await this._treatmentFileRepository.save({
      ...treatment,
    } as unknown);

    return result;
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

    const isAffected = (await this._treatmentFileRepository.delete(id))
      .affected;
    if (isAffected) {
      return id;
    }
  }

  /**
   * Find range of date
   */
  public async findBetweenDates(
    dates: Date[]
  ): Promise<[TreatmentFile[], number]> {
    if (!dates[1]) dates[1] = moment().toDate();
    const data = await this._treatmentFileRepository.findAndCount({
      consultationDate: Between(dates[0], dates[1]),
    });
    return data;
  }

  /**
   * Find a treatment file by date
   */
  public async findByDate(date: Date): Promise<[TreatmentFile[], number]> {
    return await this._treatmentFileRepository.findAndCount({
      where: {
        createAt: date,
      },
    });
  }

  /**
   * Find ALl Treatment Files By Status, else all treatments
   */
  public async findALlByStatus(status: string): Promise<TreatmentFile[]> {
    if (status) {
      return await this._treatmentFileRepository.find({
        where: {
          status: status,
        },
      });
    }
    return await this.findAll()[0];
  }

  /**
   * Find aLl treatment files by patient clinic
   */
  public async findByFile(clinic: string): Promise<TreatmentFile[]> {
    const patient = await this._patientRepository.findOne({
      where: {
        clinic,
      },
    });
    if (!patient)
      throw new NotFoundException(
        'El expediente clinico no se encuentra asociado a ningun paciente'
      );

    return await this._treatmentFileRepository.find({
      where: {
        patient: {
          id: patient.id,
        },
      },
    });
  }
}
