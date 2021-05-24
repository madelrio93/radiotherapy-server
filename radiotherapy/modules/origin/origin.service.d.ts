import { Repository } from 'typeorm';
import { Origin } from './entities/origin.entity';
import { CommonService } from '../../shared';
export declare class OriginService extends CommonService<Origin> {
    private readonly _originRepository;
    constructor(_originRepository: Repository<Origin>);
}
