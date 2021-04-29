import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Origin } from './entities/origin.entity';
import { CommonService } from '../../shared';

@Injectable()
export class OriginService extends CommonService<Origin> {
  constructor(
    @InjectRepository(Origin)
    private readonly _originRepository: Repository<Origin>
  ) {
    super(_originRepository);
  }
}
