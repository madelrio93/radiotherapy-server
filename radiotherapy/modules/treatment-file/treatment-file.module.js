"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatmentFileModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const treatment_file_service_1 = require("./treatment-file.service");
const treatment_file_resolver_1 = require("./treatment-file.resolver");
const treatment_file_entity_1 = require("./entities/treatment-file.entity");
const patient_entity_1 = require("./entities/patient.entity");
const specialist_module_1 = require("../specialist/specialist.module");
const equipment_module_1 = require("../equipment/equipment.module");
const location_module_1 = require("../location/location.module");
const origin_module_1 = require("../origin/origin.module");
const stage_module_1 = require("../stage/stage.module");
const auth_module_1 = require("../auth/auth.module");
let TreatmentFileModule = class TreatmentFileModule {
};
TreatmentFileModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([treatment_file_entity_1.TreatmentFile, patient_entity_1.Patient]),
            auth_module_1.AuthModule,
            specialist_module_1.SpecialistModule,
            equipment_module_1.EquipmentModule,
            location_module_1.LocationModule,
            origin_module_1.OriginModule,
            stage_module_1.StageModule,
        ],
        providers: [treatment_file_resolver_1.TreatmentFileResolver, treatment_file_service_1.TreatmentFileService],
        exports: [treatment_file_service_1.TreatmentFileService],
    })
], TreatmentFileModule);
exports.TreatmentFileModule = TreatmentFileModule;
//# sourceMappingURL=treatment-file.module.js.map