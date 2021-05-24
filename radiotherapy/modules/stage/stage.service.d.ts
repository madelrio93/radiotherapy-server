import { Repository } from 'typeorm';
import { Stage } from './entities/stage.entity';
import { CommonService } from '../../shared';
export declare class StageService extends CommonService<Stage> {
    private readonly _stageRepository;
    constructor(_stageRepository: Repository<Stage>);
}
