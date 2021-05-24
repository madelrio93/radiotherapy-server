"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const location_service_1 = require("./location.service");
const location_entity_1 = require("./entities/location.entity");
const shared_1 = require("../../shared");
let LocationResolver = class LocationResolver {
    constructor(_LocationService) {
        this._LocationService = _LocationService;
    }
    createLocation(createLocationInput) {
        return this._LocationService.create(createLocationInput);
    }
    findAll() {
        return this._LocationService.findAll();
    }
    findOne(id) {
        return this._LocationService.findOne(id);
    }
    updateLocation(updateLocationInput) {
        return this._LocationService.update(updateLocationInput);
    }
    removeLocation(id) {
        return this._LocationService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => location_entity_1.Location),
    __param(0, graphql_1.Args('createLocationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shared_1.CreateCommonInput]),
    __metadata("design:returntype", void 0)
], LocationResolver.prototype, "createLocation", null);
__decorate([
    graphql_1.Query(() => [location_entity_1.Location], { name: 'Locations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocationResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => location_entity_1.Location, { name: 'Location' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocationResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => location_entity_1.Location),
    __param(0, graphql_1.Args('updateLocationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shared_1.UpdateCommonInput]),
    __metadata("design:returntype", void 0)
], LocationResolver.prototype, "updateLocation", null);
__decorate([
    graphql_1.Mutation(() => graphql_1.ID),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocationResolver.prototype, "removeLocation", null);
LocationResolver = __decorate([
    graphql_1.Resolver(() => location_entity_1.Location),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationResolver);
exports.LocationResolver = LocationResolver;
//# sourceMappingURL=location.resolver.js.map