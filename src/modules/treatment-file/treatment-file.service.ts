import { Injectable } from '@nestjs/common';
import { CreateTreatmentFileInput } from './dto/create-treatment-file.input';
import { UpdateTreatmentFileInput } from './dto/update-treatment-file.input';

@Injectable()
export class TreatmentFileService {
  create(createTreatmentFileInput: CreateTreatmentFileInput) {
    return `This action adds a new treatmentFile ${createTreatmentFileInput}`;
  }

  findAll() {
    return `This action returns all treatmentFile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} treatmentFile`;
  }

  update(id: number, updateTreatmentFileInput: UpdateTreatmentFileInput) {
    return `This action updates a # ${id} input ${updateTreatmentFileInput})
    } treatmentFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} treatmentFile`;
  }
}
