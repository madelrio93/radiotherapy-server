import { StageService } from './stage.service';
import { Stage } from './entities/stage.entity';
import { CreateCommonInput, UpdateCommonInput } from '../../shared';
export declare class StageResolver {
    private readonly _stageService;
    constructor(_stageService: StageService);
    createStage(createStageInput: CreateCommonInput): Promise<any>;
    findAll(): Promise<Stage[]>;
    findOne(id: number): Promise<Stage>;
    updateStage(updateStageInput: UpdateCommonInput): Promise<Stage>;
    removeStage(id: number): Promise<number>;
}
