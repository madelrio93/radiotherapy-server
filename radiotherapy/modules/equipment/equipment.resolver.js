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
exports.EquipmentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const equipment_service_1 = require("./equipment.service");
const equipment_entity_1 = require("./entities/equipment.entity");
const shared_1 = require("../../shared");
let EquipmentResolver = class EquipmentResolver {
    constructor(_equipmentService) {
        this._equipmentService = _equipmentService;
    }
    createEquipment(createEquipmentInput) {
        return this._equipmentService.create(createEquipmentInput);
    }
    findAll() {
        return this._equipmentService.findAll();
    }
    findOne(id) {
        return this._equipmentService.findOne(id);
    }
    updateEquipment(updateEquipmentInput) {
        return this._equipmentService.update(updateEquipmentInput);
    }
    removeEquipment(id) {
        return this._equipmentService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => equipment_entity_1.Equipment),
    __param(0, graphql_1.Args('createEquipmentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shared_1.CreateCommonInput]),
    __metadata("design:returntype", void 0)
], EquipmentResolver.prototype, "createEquipment", null);
__decorate([
    graphql_1.Query(() => [equipment_entity_1.Equipment], { name: 'equipments' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EquipmentResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => equipment_entity_1.Equipment, { name: 'equipment' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EquipmentResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => equipment_entity_1.Equipment),
    __param(0, graphql_1.Args('updateEquipmentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shared_1.UpdateCommonInput]),
    __metadata("design:returntype", void 0)
], EquipmentResolver.prototype, "updateEquipment", null);
__decorate([
    graphql_1.Mutation(() => equipment_entity_1.Equipment),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EquipmentResolver.prototype, "removeEquipment", null);
EquipmentResolver = __decorate([
    graphql_1.Resolver(() => equipment_entity_1.Equipment),
    __metadata("design:paramtypes", [equipment_service_1.EquipmentService])
], EquipmentResolver);
exports.EquipmentResolver = EquipmentResolver;
//# sourceMappingURL=equipment.resolver.js.map