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
exports.TreatmentFileResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const treatment_file_service_1 = require("./treatment-file.service");
const treatment_file_entity_1 = require("./entities/treatment-file.entity");
const create_treatment_file_input_1 = require("./dto/create-treatment-file.input");
const update_treatment_file_input_1 = require("./dto/update-treatment-file.input");
let TreatmentFileResolver = class TreatmentFileResolver {
    constructor(_treatmentFileService) {
        this._treatmentFileService = _treatmentFileService;
    }
    async findAll() {
        const treatmentFile = await this._treatmentFileService.findAll();
        return treatmentFile[0];
    }
    findOne(id) {
        return this._treatmentFileService.findOne(id);
    }
    createTreatmentFile(createTreatmentFile) {
        return this._treatmentFileService.create(createTreatmentFile);
    }
    updateTreatmentFile(updateTreatmentFileInput) {
        return this._treatmentFileService.update(updateTreatmentFileInput);
    }
    removeTreatmentFile(id) {
        return this._treatmentFileService.remove(id);
    }
};
__decorate([
    graphql_1.Query(() => [treatment_file_entity_1.TreatmentFile], { name: 'treatmentsFiles' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TreatmentFileResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => treatment_file_entity_1.TreatmentFile, { name: 'treatmentFile' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TreatmentFileResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => treatment_file_entity_1.TreatmentFile),
    __param(0, graphql_1.Args('createTreatmentFile')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_treatment_file_input_1.CreateTreatmentFileInput]),
    __metadata("design:returntype", Promise)
], TreatmentFileResolver.prototype, "createTreatmentFile", null);
__decorate([
    graphql_1.Mutation(() => treatment_file_entity_1.TreatmentFile),
    __param(0, graphql_1.Args('updateTreatmentFileInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_treatment_file_input_1.UpdateTreatmentFileInput]),
    __metadata("design:returntype", void 0)
], TreatmentFileResolver.prototype, "updateTreatmentFile", null);
__decorate([
    graphql_1.Mutation(() => graphql_1.ID),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TreatmentFileResolver.prototype, "removeTreatmentFile", null);
TreatmentFileResolver = __decorate([
    graphql_1.Resolver(() => treatment_file_entity_1.TreatmentFile),
    __metadata("design:paramtypes", [treatment_file_service_1.TreatmentFileService])
], TreatmentFileResolver);
exports.TreatmentFileResolver = TreatmentFileResolver;
//# sourceMappingURL=treatment-file.resolver.js.map