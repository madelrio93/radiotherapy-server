import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { OriginService } from './origin.service';
import { Origin } from './entities/origin.entity';
import { CreateCommonInput, UpdateCommonInput } from '../../shared';

@Resolver(() => Origin)
export class OriginResolver {
  constructor(private readonly _originService: OriginService) {}

  @Mutation(() => Origin)
  createOrigin(
    @Args('createOriginInput') createOriginInput: CreateCommonInput
  ) {
    return this._originService.create(createOriginInput);
  }

  @Query(() => [Origin], { name: 'origins' })
  findAll() {
    return this._originService.findAll();
  }

  @Query(() => Origin, { name: 'origin' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this._originService.findOne(id);
  }

  @Mutation(() => Origin)
  updateOrigin(
    @Args('updateOriginInput') updateOriginInput: UpdateCommonInput
  ) {
    return this._originService.update(updateOriginInput);
  }

  @Mutation(() => ID)
  removeOrigin(@Args('id', { type: () => ID }) id: number) {
    return this._originService.remove(id);
  }
}
