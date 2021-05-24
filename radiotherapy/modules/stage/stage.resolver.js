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
exports.StageResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const stage_service_1 = require("./stage.service");
const stage_entity_1 = require("./entities/stage.entity");
const shared_1 = require("../../shared");
let StageResolver = class StageResolver {
    constructor(_stageService) {
        this._stageService = _stageService;
    }
    createStage(createStageInput) {
        return this._stageService.create(createStageInput);
    }
    findAll() {
        return this._stageService.findAll();
    }
    findOne(id) {
        return this._stageService.findOne(id);
    }
    updateStage(updateStageInput) {
        return this._stageService.update(updateStageInput);
    }
    removeStage(id) {
        return this._stageService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => stage_entity_1.Stage),
    __param(0, graphql_1.Args('createStageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shared_1.CreateCommonInput]),
    __metadata("design:returntype", void 0)
], StageResolver.prototype, "createStage", null);
__decorate([
    graphql_1.Query(() => [stage_entity_1.Stage], { name: 'stages' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StageResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => stage_entity_1.Stage, { name: 'stage' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StageResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => stage_entity_1.Stage),
    __param(0, graphql_1.Args('updateStageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shared_1.UpdateCommonInput]),
    __metadata("design:returntype", void 0)
], StageResolver.prototype, "updateStage", null);
__decorate([
    graphql_1.Mutation(() => graphql_1.ID),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StageResolver.prototype, "removeStage", null);
StageResolver = __decorate([
    graphql_1.Resolver(() => stage_entity_1.Stage),
    __metadata("design:paramtypes", [stage_service_1.StageService])
], StageResolver);
exports.StageResolver = StageResolver;
//# sourceMappingURL=stage.resolver.js.map