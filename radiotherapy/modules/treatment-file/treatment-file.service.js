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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatmentFileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const moment_1 = __importDefault(require("moment"));
const constants_1 = require("../../constants");
const patient_entity_1 = require("./entities/patient.entity");
const treatment_file_entity_1 = require("./entities/treatment-file.entity");
const patients_1 = require("./utils/patients");
let TreatmentFileService = class TreatmentFileService extends patients_1.PatientUtils {
    constructor(_treatmentFileRepository, _patientRepository) {
        super(_patientRepository);
        this._treatmentFileRepository = _treatmentFileRepository;
        this._patientRepository = _patientRepository;
    }
    async create(treatmentFile) {
        const patientId = await this.findPatientByClinic(treatmentFile);
        patientId && (treatmentFile.patient.id = patientId);
        const treatment = new treatment_file_entity_1.TreatmentFile();
        treatment.consultationDate = treatmentFile.consultationDate;
        treatment.status = treatmentFile.status;
        treatment.patient = Promise.resolve(Object.assign({}, treatmentFile.patient));
        treatment.speciaList = Promise.resolve(Object.assign({}, treatmentFile.speciaList));
        treatment.equipment = Promise.resolve(Object.assign({}, treatmentFile.equipment));
        treatment.location = Promise.resolve(Object.assign({}, treatmentFile.location));
        treatment.origin = Promise.resolve(Object.assign({}, treatmentFile.origin));
        treatment.stage = Promise.resolve(Object.assign({}, treatmentFile.stage));
        return await this._treatmentFileRepository.save(treatment);
    }
    async findAll() {
        return await this._treatmentFileRepository.findAndCount();
    }
    async findOne(id) {
        const treatmentFile = await this._treatmentFileRepository.findOne(id);
        if (!treatmentFile)
            throw new common_1.NotFoundException(constants_1.TREATMENT_FILE_NOT_FOUND);
        return treatmentFile;
    }
    async update(updateTreatmentFile) {
        const { id } = updateTreatmentFile;
        const result = await this.findOne(id);
        (updateTreatmentFile === null || updateTreatmentFile === void 0 ? void 0 : updateTreatmentFile.patient) &&
            (await this.createPatient(updateTreatmentFile.patient));
        await this._treatmentFileRepository.save(Object.assign({}, updateTreatmentFile));
        return result;
    }
    async remove(id) {
        const treatmentFile = this.findOne(id);
        const treatment = await this._treatmentFileRepository.find({
            where: {
                patient: (await (await treatmentFile).patient).id,
            },
        });
        if (treatment.length === 1)
            return await this.deletePatient((await (await treatmentFile).patient).id);
        const isAffected = (await this._treatmentFileRepository.delete(id))
            .affected;
        if (isAffected) {
            return id;
        }
    }
    async findBetweenDates(dates) {
        if (!dates[1])
            dates[1] = moment_1.default().toDate();
        const data = await this._treatmentFileRepository.findAndCount({
            consultationDate: typeorm_2.Between(dates[0], dates[1]),
        });
        return data;
    }
    async findByDate(date) {
        return await this._treatmentFileRepository.findAndCount({
            where: {
                createAt: date,
            },
        });
    }
};
TreatmentFileService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(treatment_file_entity_1.TreatmentFile)),
    __param(1, typeorm_1.InjectRepository(patient_entity_1.Patient)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TreatmentFileService);
exports.TreatmentFileService = TreatmentFileService;
//# sourceMappingURL=treatment-file.service.js.map