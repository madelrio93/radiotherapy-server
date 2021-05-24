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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let CommonService = class CommonService {
    constructor(_repository) {
        this._repository = _repository;
    }
    async create(createCommonDto) {
        return await this._repository.save(createCommonDto);
    }
    async findAll() {
        return await this._repository.find();
    }
    async findOne(id) {
        const data = await this._repository.findOne(id);
        if (!data)
            throw new common_1.NotFoundException(`No se encuetra el elemento con id ${id}`);
        return data;
    }
    async update(updateEntityDto) {
        return await this._repository.save(updateEntityDto);
    }
    async remove(id) {
        await this.findOne(id);
        const data = (await this._repository.delete(id)).affected;
        if (!data)
            throw new common_1.BadRequestException('Ha ocurrido un error al eliminar el elemento');
        return id;
    }
};
CommonService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CommonService);
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map