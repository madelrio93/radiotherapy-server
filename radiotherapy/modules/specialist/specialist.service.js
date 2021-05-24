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
exports.SpecialistService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const specialist_entity_1 = require("./entities/specialist.entity");
let SpecialistService = class SpecialistService {
    constructor(_specialistRepository) {
        this._specialistRepository = _specialistRepository;
    }
    async findAll() {
        return await this._specialistRepository.find();
    }
    async findOne(id) {
        const specialist = await this._specialistRepository.findOne(id);
        if (!specialist)
            throw new common_1.NotFoundException(`No se encuetra el especialista con id ${id}`);
        return specialist;
    }
    async create(createSpecialistInput) {
        return await this._specialistRepository.save(createSpecialistInput);
    }
    async update(updateSpecialistInput) {
        return await this._specialistRepository.save(Object.assign({}, updateSpecialistInput));
    }
    async remove(id) {
        await this.findOne(id);
        const specialistDeleted = (await this._specialistRepository.delete(id))
            .affected;
        if (!specialistDeleted)
            throw new common_1.BadRequestException('Ha ocurrido un error al eliminar el elemento');
        return id;
    }
};
SpecialistService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(specialist_entity_1.Specialist)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SpecialistService);
exports.SpecialistService = SpecialistService;
//# sourceMappingURL=specialist.service.js.map