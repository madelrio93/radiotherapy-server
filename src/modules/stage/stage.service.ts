import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Stage } from './entities/stage.entity';
import { CommonService } from '../../shared';

@Injectable()
export class StageService extends CommonService<Stage> {
  constructor(
    @InjectRepository(Stage)
    private readonly _stageRepository: Repository<Stage>
  ) {
    super(_stageRepository);
  }
}
