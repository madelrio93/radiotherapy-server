import { SpecialistService } from './specialist.service';
import { Specialist } from './entities/specialist.entity';
import { CreateSpecialistInput } from './dto/create-specialist.input';
import { UpdateSpecialistInput } from './dto/update-specialist.input';
export declare class SpecialistResolver {
    private readonly _specialistService;
    constructor(_specialistService: SpecialistService);
    findAll(): Promise<Specialist[]>;
    findOne(id: number): Promise<Specialist>;
    createSpecialist(createSpecialistInput: CreateSpecialistInput): Promise<CreateSpecialistInput & Specialist>;
    updateSpecialist(updateSpecialistInput: UpdateSpecialistInput): Promise<Specialist>;
    removeSpecialist(id: number): Promise<number>;
}
