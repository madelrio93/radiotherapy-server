import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { StageService } from './stage.service';
import { Stage } from './entities/stage.entity';
import { CreateCommonInput, UpdateCommonInput } from '../../shared';

@Resolver(() => Stage)
export class StageResolver {
  constructor(private readonly _stageService: StageService) {}

  @Mutation(() => Stage)
  createStage(@Args('createStageInput') createStageInput: CreateCommonInput) {
    return this._stageService.create(createStageInput);
  }

  @Query(() => [Stage], { name: 'stages' })
  findAll() {
    return this._stageService.findAll();
  }

  @Query(() => Stage, { name: 'stage' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this._stageService.findOne(id);
  }

  @Mutation(() => Stage)
  updateStage(@Args('updateStageInput') updateStageInput: UpdateCommonInput) {
    return this._stageService.update(updateStageInput);
  }

  @Mutation(() => ID)
  removeStage(@Args('id', { type: () => ID }) id: number) {
    return this._stageService.remove(id);
  }
}
