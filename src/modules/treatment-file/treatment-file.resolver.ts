import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TreatmentFileService } from './treatment-file.service';
import { TreatmentFile } from './entities/treatment-file.entity';
import { CreateTreatmentFileInput } from './dto/create-treatment-file.input';
import { UpdateTreatmentFileInput } from './dto/update-treatment-file.input';

@Resolver(() => TreatmentFile)
export class TreatmentFileResolver {
  constructor(private readonly treatmentFileService: TreatmentFileService) {}

  @Mutation(() => TreatmentFile)
  createTreatmentFile(@Args('createTreatmentFileInput') createTreatmentFileInput: CreateTreatmentFileInput) {
    return this.treatmentFileService.create(createTreatmentFileInput);
  }

  @Query(() => [TreatmentFile], { name: 'treatmentFile' })
  findAll() {
    return this.treatmentFileService.findAll();
  }

  @Query(() => TreatmentFile, { name: 'treatmentFile' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.treatmentFileService.findOne(id);
  }

  @Mutation(() => TreatmentFile)
  updateTreatmentFile(@Args('updateTreatmentFileInput') updateTreatmentFileInput: UpdateTreatmentFileInput) {
    return this.treatmentFileService.update(updateTreatmentFileInput.id, updateTreatmentFileInput);
  }

  @Mutation(() => TreatmentFile)
  removeTreatmentFile(@Args('id', { type: () => Int }) id: number) {
    return this.treatmentFileService.remove(id);
  }
}
