import { LocationService } from './location.service';
import { Location } from './entities/location.entity';
import { CreateCommonInput, UpdateCommonInput } from '../../shared';
export declare class LocationResolver {
    private readonly _LocationService;
    constructor(_LocationService: LocationService);
    createLocation(createLocationInput: CreateCommonInput): Promise<any>;
    findAll(): Promise<Location[]>;
    findOne(id: number): Promise<Location>;
    updateLocation(updateLocationInput: UpdateCommonInput): Promise<Location>;
    removeLocation(id: number): Promise<number>;
}
