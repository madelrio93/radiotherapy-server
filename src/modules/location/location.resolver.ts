import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from './entities/location.entity';
import { CreateCommonInput, UpdateCommonInput } from '../../shared';

@Resolver(() => Location)
export class LocationResolver {
  constructor(private readonly _LocationService: LocationService) {}

  @Mutation(() => Location)
  createLocation(
    @Args('createLocationInput') createLocationInput: CreateCommonInput
  ) {
    return this._LocationService.create(createLocationInput);
  }

  @Query(() => [Location], { name: 'Locations' })
  findAll() {
    return this._LocationService.findAll();
  }

  @Query(() => Location, { name: 'Location' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this._LocationService.findOne(id);
  }

  @Mutation(() => Location)
  updateLocation(
    @Args('updateLocationInput') updateLocationInput: UpdateCommonInput
  ) {
    return this._LocationService.update(updateLocationInput);
  }

  @Mutation(() => ID)
  removeLocation(@Args('id', { type: () => ID }) id: number) {
    return this._LocationService.remove(id);
  }
}
