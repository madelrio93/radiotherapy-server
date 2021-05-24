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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsService = void 0;
const common_1 = require("@nestjs/common");
const moment_1 = __importDefault(require("moment"));
const treatment_file_service_1 = require("../treatment-file/treatment-file.service");
let StatisticsService = class StatisticsService {
    constructor(_treatmentFileService) {
        this._treatmentFileService = _treatmentFileService;
    }
    async getStadistic() {
        const statistics = {
            all: (await this._treatmentFileService.findAll())[1],
            lastYear: (await this._treatmentFileService.findBetweenDates([
                moment_1.default().subtract(1, 'years').toDate(),
                moment_1.default().toDate(),
            ]))[1],
            lastMonth: (await this._treatmentFileService.findBetweenDates([
                moment_1.default().subtract(1, 'M').toDate(),
                moment_1.default().toDate(),
            ]))[1],
            afternoon: (await this._treatmentFileService.findBetweenDates([
                moment_1.default().subtract(1, 'days').toDate(),
                moment_1.default().toDate(),
                moment_1.default().toDate(),
            ]))[1],
            today: (await this._treatmentFileService.findByDate(moment_1.default().toDate()))[1],
        };
        return statistics;
    }
};
StatisticsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [treatment_file_service_1.TreatmentFileService])
], StatisticsService);
exports.StatisticsService = StatisticsService;
//# sourceMappingURL=statistics.service.js.map