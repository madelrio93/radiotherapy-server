import { EquipmentService } from './equipment.service';
import { Equipment } from './entities/equipment.entity';
import { CreateCommonInput, UpdateCommonInput } from '../../shared';
export declare class EquipmentResolver {
    private readonly _equipmentService;
    constructor(_equipmentService: EquipmentService);
    createEquipment(createEquipmentInput: CreateCommonInput): Promise<any>;
    findAll(): Promise<Equipment[]>;
    findOne(id: number): Promise<Equipment>;
    updateEquipment(updateEquipmentInput: UpdateCommonInput): Promise<Equipment>;
    removeEquipment(id: number): Promise<number>;
}
