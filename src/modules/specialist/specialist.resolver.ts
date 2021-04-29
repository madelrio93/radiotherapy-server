import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { SpecialistService } from './specialist.service';
import { Specialist } from './entities/specialist.entity';
import { CreateSpecialistInput } from './dto/create-specialist.input';
import { UpdateSpecialistInput } from './dto/update-specialist.input';

@Resolver(() => Specialist)
export class SpecialistResolver {
  constructor(private readonly _specialistService: SpecialistService) {}

  @Query(() => [Specialist], { name: 'specialists' })
  findAll() {
    return this._specialistService.findAll();
  }

  @Query(() => Specialist, { name: 'specialist' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this._specialistService.findOne(id);
  }

  @Mutation(() => Specialist)
  createSpecialist(
    @Args('newSpecialist') createSpecialistInput: CreateSpecialistInput
  ) {
    return this._specialistService.create(createSpecialistInput);
  }

  @Mutation(() => Specialist)
  updateSpecialist(
    @Args('updateSpecialistInput') updateSpecialistInput: UpdateSpecialistInput
  ) {
    return this._specialistService.update(updateSpecialistInput);
  }

  @Mutation(() => ID)
  removeSpecialist(@Args('id', { type: () => ID }) id: number) {
    return this._specialistService.remove(id);
  }
}
