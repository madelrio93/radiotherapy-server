import { Repository } from 'typeorm';
import { CreateSpecialistInput } from './dto/create-specialist.input';
import { UpdateSpecialistInput } from './dto/update-specialist.input';
import { Specialist } from './entities/specialist.entity';
export declare class SpecialistService {
    private readonly _specialistRepository;
    constructor(_specialistRepository: Repository<Specialist>);
    findAll(): Promise<Specialist[]>;
    findOne(id: number): Promise<Specialist>;
    create(createSpecialistInput: CreateSpecialistInput): Promise<CreateSpecialistInput & Specialist>;
    update(updateSpecialistInput: UpdateSpecialistInput): Promise<Specialist>;
    remove(id: number): Promise<number>;
}
