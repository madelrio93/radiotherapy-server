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
exports.SpecialistResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const specialist_service_1 = require("./specialist.service");
const specialist_entity_1 = require("./entities/specialist.entity");
const create_specialist_input_1 = require("./dto/create-specialist.input");
const update_specialist_input_1 = require("./dto/update-specialist.input");
let SpecialistResolver = class SpecialistResolver {
    constructor(_specialistService) {
        this._specialistService = _specialistService;
    }
    findAll() {
        return this._specialistService.findAll();
    }
    findOne(id) {
        return this._specialistService.findOne(id);
    }
    createSpecialist(createSpecialistInput) {
        return this._specialistService.create(createSpecialistInput);
    }
    updateSpecialist(updateSpecialistInput) {
        return this._specialistService.update(updateSpecialistInput);
    }
    removeSpecialist(id) {
        return this._specialistService.remove(id);
    }
};
__decorate([
    graphql_1.Query(() => [specialist_entity_1.Specialist], { name: 'specialists' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SpecialistResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => specialist_entity_1.Specialist, { name: 'specialist' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SpecialistResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => specialist_entity_1.Specialist),
    __param(0, graphql_1.Args('newSpecialist')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_specialist_input_1.CreateSpecialistInput]),
    __metadata("design:returntype", void 0)
], SpecialistResolver.prototype, "createSpecialist", null);
__decorate([
    graphql_1.Mutation(() => specialist_entity_1.Specialist),
    __param(0, graphql_1.Args('updateSpecialistInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_specialist_input_1.UpdateSpecialistInput]),
    __metadata("design:returntype", void 0)
], SpecialistResolver.prototype, "updateSpecialist", null);
__decorate([
    graphql_1.Mutation(() => graphql_1.ID),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SpecialistResolver.prototype, "removeSpecialist", null);
SpecialistResolver = __decorate([
    graphql_1.Resolver(() => specialist_entity_1.Specialist),
    __metadata("design:paramtypes", [specialist_service_1.SpecialistService])
], SpecialistResolver);
exports.SpecialistResolver = SpecialistResolver;
//# sourceMappingURL=specialist.resolver.js.map