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
exports.OriginResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const origin_service_1 = require("./origin.service");
const origin_entity_1 = require("./entities/origin.entity");
const shared_1 = require("../../shared");
let OriginResolver = class OriginResolver {
    constructor(_originService) {
        this._originService = _originService;
    }
    createOrigin(createOriginInput) {
        return this._originService.create(createOriginInput);
    }
    findAll() {
        return this._originService.findAll();
    }
    findOne(id) {
        return this._originService.findOne(id);
    }
    updateOrigin(updateOriginInput) {
        return this._originService.update(updateOriginInput);
    }
    removeOrigin(id) {
        return this._originService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => origin_entity_1.Origin),
    __param(0, graphql_1.Args('createOriginInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shared_1.CreateCommonInput]),
    __metadata("design:returntype", void 0)
], OriginResolver.prototype, "createOrigin", null);
__decorate([
    graphql_1.Query(() => [origin_entity_1.Origin], { name: 'origins' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OriginResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => origin_entity_1.Origin, { name: 'origin' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OriginResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => origin_entity_1.Origin),
    __param(0, graphql_1.Args('updateOriginInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shared_1.UpdateCommonInput]),
    __metadata("design:returntype", void 0)
], OriginResolver.prototype, "updateOrigin", null);
__decorate([
    graphql_1.Mutation(() => graphql_1.ID),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OriginResolver.prototype, "removeOrigin", null);
OriginResolver = __decorate([
    graphql_1.Resolver(() => origin_entity_1.Origin),
    __metadata("design:paramtypes", [origin_service_1.OriginService])
], OriginResolver);
exports.OriginResolver = OriginResolver;
//# sourceMappingURL=origin.resolver.js.map