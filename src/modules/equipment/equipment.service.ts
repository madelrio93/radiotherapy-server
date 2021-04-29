import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Equipment } from './entities/equipment.entity';
import { CommonService } from '../../shared';

@Injectable()
export class EquipmentService extends CommonService<Equipment> {
  constructor(
    @InjectRepository(Equipment)
    private readonly _equipmentRepository: Repository<Equipment>
  ) {
    super(_equipmentRepository);
  }
}
