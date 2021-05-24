import { OriginService } from './origin.service';
import { Origin } from './entities/origin.entity';
import { CreateCommonInput, UpdateCommonInput } from '../../shared';
export declare class OriginResolver {
    private readonly _originService;
    constructor(_originService: OriginService);
    createOrigin(createOriginInput: CreateCommonInput): Promise<any>;
    findAll(): Promise<Origin[]>;
    findOne(id: number): Promise<Origin>;
    updateOrigin(updateOriginInput: UpdateCommonInput): Promise<Origin>;
    removeOrigin(id: number): Promise<number>;
}
