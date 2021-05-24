import { Repository } from 'typeorm';
import { Equipment } from './entities/equipment.entity';
import { CommonService } from '../../shared';
export declare class EquipmentService extends CommonService<Equipment> {
    private readonly _equipmentRepository;
    constructor(_equipmentRepository: Repository<Equipment>);
}
