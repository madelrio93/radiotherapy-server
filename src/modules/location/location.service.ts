import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Location } from './entities/location.entity';
import { CommonService } from '../../shared';

@Injectable()
export class LocationService extends CommonService<Location> {
  constructor(
    @InjectRepository(Location)
    private readonly _LocationRepository: Repository<Location>
  ) {
    super(_LocationRepository);
  }
}
