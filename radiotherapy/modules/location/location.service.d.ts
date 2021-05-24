import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { CommonService } from '../../shared';
export declare class LocationService extends CommonService<Location> {
    private readonly _LocationRepository;
    constructor(_LocationRepository: Repository<Location>);
}
