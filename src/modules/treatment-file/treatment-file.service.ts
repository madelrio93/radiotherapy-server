import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import moment from 'moment';

import { TREATMENT_FILE_NOT_FOUND } from '../../constants';
import { CreateTreatmentFileInput } from './dto/create-treatment-file.input';
import { UpdateTreatmentFileInput } from './dto/update-treatment-file.input';
import { Patient } from './entities/patient.entity';
import { TreatmentFile } from './entities/treatment-file.entity';
import { PatientUtils, generatePDF } from './utils';
import { Origin } from '../origin/entities/origin.entity';
import { Specialist } from '../specialist/entities/specialist.entity';
import { Equipment } from '../equipment/entities/equipment.entity';
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

  public async findAll(): Promise<[TreatmentFile[], number]> {
    return await this._treatmentFileRepository.findAndCount({
      order: {
        id: 'DESC',
      },
    });
  }

  public async findOne(id: number): Promise<TreatmentFile> {
    const treatmentFile = await this._treatmentFileRepository.findOne(id);

    if (!treatmentFile) throw new NotFoundException(TREATMENT_FILE_NOT_FOUND);
    return treatmentFile;
  }

  public async create(newTreatmentFile: CreateTreatmentFileInput) {
    const patientId = await this.findPatientByClinic(newTreatmentFile);
    patientId && (newTreatmentFile.patient.id = patientId);
    const result = await this._treatmentFileRepository.save(newTreatmentFile);
    return await this.findOne(result.id);
  }

  public async update(
    updateTreatment: UpdateTreatmentFileInput
  ): Promise<TreatmentFile> {
    const treatment = new TreatmentFile();
    treatment.consultationDate = updateTreatment.consultationDate;
    treatment.description = updateTreatment.description;
    treatment.id = updateTreatment.id;
    treatment.imageIndication = updateTreatment.imageIndication;
    treatment.priority = updateTreatment.priority;
    treatment.origin = { ...updateTreatment.origin } as Origin;
    treatment.speciaList = { ...updateTreatment.speciaList } as Specialist;
    treatment.equipment = { ...updateTreatment.equipment } as Equipment;
    treatment.location = { ...updateTreatment.location } as Location;
    treatment.origin = { ...updateTreatment.origin } as Origin;
    treatment.stage = { ...updateTreatment.stage } as Stage;
    treatment.patient = { ...updateTreatment.patient } as Patient;

    await this._treatmentFileRepository.save(treatment);
    return await this.findOne(updateTreatment.id);
  }

  public async remove(id: number) {
    const treatmentFile = this.findOne(id);
    const patient = await this._treatmentFileRepository.find({
      where: {
        patient: (await (await treatmentFile).patient).id,
      },
    });
    if (patient.length === 1) {
      const isDeleted = await this.deletePatient(
        (await (await treatmentFile).patient).id
      );
      if (isDeleted) {
        return id;
      }
    }

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
  public async findALlByStatus(
    status: string
  ): Promise<TreatmentFile[] | [TreatmentFile[], number]> {
    if (status) {
      return await this._treatmentFileRepository.find({
        where: {
          status: status,
        },
      });
    }
    return await this.findAll();
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

  async getPDF() {
    return await generatePDF();
  }
}
