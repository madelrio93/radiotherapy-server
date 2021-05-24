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
exports.Patient = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const constants_1 = require("../../../constants");
const treatment_file_entity_1 = require("./treatment-file.entity");
const person_1 = require("../../../shared/person");
let Patient = class Patient extends person_1.Person {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "clinic", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Patient.prototype, "age", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column('enum', { enum: constants_1.Sex }),
    __metadata("design:type", String)
], Patient.prototype, "sex", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Patient.prototype, "phone", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "municipality", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Patient.prototype, "province", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "address", void 0);
__decorate([
    graphql_1.Field(() => [treatment_file_entity_1.TreatmentFile]),
    typeorm_1.OneToMany(() => treatment_file_entity_1.TreatmentFile, (treatmentfile) => treatmentfile.patient),
    __metadata("design:type", Promise)
], Patient.prototype, "treatmentsFiles", void 0);
Patient = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity(constants_1.PATIENTS)
], Patient);
exports.Patient = Patient;
//# sourceMappingURL=patient.entity.js.map