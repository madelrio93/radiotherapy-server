import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { TreatmentFileService } from './treatment-file.service';
import { TreatmentFile } from './entities/treatment-file.entity';
import { CreateTreatmentFileInput } from './dto/create-treatment-file.input';
import { UpdateTreatmentFileInput } from './dto/update-treatment-file.input';

@Resolver(() => TreatmentFile)
export class TreatmentFileResolver {
  constructor(private readonly _treatmentFileService: TreatmentFileService) {}

  @Query(() => [TreatmentFile], { name: 'treatmentsFiles' })
  async findAll() {
    const treatmentFile = await this._treatmentFileService.findAll();
    return treatmentFile[0];
  }

  @Query(() => TreatmentFile, { name: 'treatmentFile' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this._treatmentFileService.findOne(id);
  }

  @Mutation(() => TreatmentFile)
  createTreatmentFile(
    @Args('createTreatmentFile') createTreatmentFile: CreateTreatmentFileInput
  ): Promise<TreatmentFile> {
    return this._treatmentFileService.create(createTreatmentFile);
  }

  @Mutation(() => TreatmentFile)
  updateTreatmentFile(
    @Args('updateTreatmentFileInput')
    updateTreatmentFileInput: UpdateTreatmentFileInput
  ) {
    return this._treatmentFileService.update(updateTreatmentFileInput);
  }

  @Mutation(() => Boolean)
  removeTreatmentFile(@Args('id', { type: () => Int }) id: number) {
    return this._treatmentFileService.remove(id);
  }
}
