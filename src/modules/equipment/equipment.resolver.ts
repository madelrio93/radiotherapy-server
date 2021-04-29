import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { EquipmentService } from './equipment.service';
import { Equipment } from './entities/equipment.entity';
import { CreateCommonInput, UpdateCommonInput } from '../../shared';

@Resolver(() => Equipment)
export class EquipmentResolver {
  constructor(private readonly _equipmentService: EquipmentService) {}

  @Mutation(() => Equipment)
  createEquipment(
    @Args('createEquipmentInput') createEquipmentInput: CreateCommonInput
  ) {
    return this._equipmentService.create(createEquipmentInput);
  }

  @Query(() => [Equipment], { name: 'equipments' })
  findAll() {
    return this._equipmentService.findAll();
  }

  @Query(() => Equipment, { name: 'equipment' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this._equipmentService.findOne(id);
  }

  @Mutation(() => Equipment)
  updateEquipment(
    @Args('updateEquipmentInput') updateEquipmentInput: UpdateCommonInput
  ) {
    return this._equipmentService.update(updateEquipmentInput);
  }

  @Mutation(() => Equipment)
  removeEquipment(@Args('id', { type: () => ID }) id: number) {
    return this._equipmentService.remove(id);
  }
}
