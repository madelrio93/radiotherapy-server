import { TreatmentFileService } from './treatment-file.service';
import { TreatmentFile } from './entities/treatment-file.entity';
import { CreateTreatmentFileInput } from './dto/create-treatment-file.input';
import { UpdateTreatmentFileInput } from './dto/update-treatment-file.input';
export declare class TreatmentFileResolver {
    private readonly _treatmentFileService;
    constructor(_treatmentFileService: TreatmentFileService);
    findAll(): Promise<TreatmentFile[]>;
    findOne(id: number): Promise<TreatmentFile>;
    createTreatmentFile(createTreatmentFile: CreateTreatmentFileInput): Promise<TreatmentFile>;
    updateTreatmentFile(updateTreatmentFileInput: UpdateTreatmentFileInput): Promise<TreatmentFile>;
    removeTreatmentFile(id: number): Promise<number>;
}
