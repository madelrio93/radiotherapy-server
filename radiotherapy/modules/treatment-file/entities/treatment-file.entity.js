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
exports.TreatmentFile = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const graphql_iso_date_1 = require("graphql-iso-date");
const shared_1 = require("../../../shared");
const constants_1 = require("../../../constants");
const patient_entity_1 = require("./patient.entity");
const specialist_entity_1 = require("../../specialist/entities/specialist.entity");
const equipment_entity_1 = require("../../equipment/entities/equipment.entity");
const location_entity_1 = require("../../location/entities/location.entity");
const origin_entity_1 = require("../../origin/entities/origin.entity");
const stage_entity_1 = require("../../stage/entities/stage.entity");
let TreatmentFile = class TreatmentFile extends shared_1.PrimaryId {
};
__decorate([
    graphql_1.Field(() => graphql_iso_date_1.GraphQLDate),
    typeorm_1.CreateDateColumn({ nullable: false, name: 'create_at' }),
    __metadata("design:type", Date)
], TreatmentFile.prototype, "createAt", void 0);
__decorate([
    graphql_1.Field(() => graphql_iso_date_1.GraphQLDate),
    typeorm_1.Column('date'),
    __metadata("design:type", Date)
], TreatmentFile.prototype, "consultationDate", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column('enum', { name: 'status', enum: constants_1.Status }),
    __metadata("design:type", String)
], TreatmentFile.prototype, "status", void 0);
__decorate([
    graphql_1.Field(() => patient_entity_1.Patient),
    typeorm_1.ManyToOne(() => patient_entity_1.Patient, (patient) => patient.treatmentsFiles, {
        cascade: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        nullable: false,
    }),
    __metadata("design:type", Promise)
], TreatmentFile.prototype, "patient", void 0);
__decorate([
    graphql_1.Field(() => specialist_entity_1.Specialist),
    typeorm_1.ManyToOne(() => specialist_entity_1.Specialist, (specialist) => specialist.treatmenstFiles, {
        nullable: false,
        cascade: true,
    }),
    __metadata("design:type", Promise)
], TreatmentFile.prototype, "speciaList", void 0);
__decorate([
    graphql_1.Field(() => equipment_entity_1.Equipment),
    typeorm_1.ManyToOne(() => equipment_entity_1.Equipment, (equipment) => equipment.treatmentsFiles, {
        nullable: false,
        cascade: true,
    }),
    __metadata("design:type", Promise)
], TreatmentFile.prototype, "equipment", void 0);
__decorate([
    graphql_1.Field(() => location_entity_1.Location),
    typeorm_1.ManyToOne(() => location_entity_1.Location, (location) => location.treatmentsFiles, {
        nullable: false,
        cascade: true,
    }),
    __metadata("design:type", Promise)
], TreatmentFile.prototype, "location", void 0);
__decorate([
    graphql_1.Field(() => origin_entity_1.Origin),
    typeorm_1.ManyToOne(() => origin_entity_1.Origin, (location) => location.treatmentsFiles, {
        nullable: false,
        cascade: true,
    }),
    __metadata("design:type", Promise)
], TreatmentFile.prototype, "origin", void 0);
__decorate([
    graphql_1.Field(() => stage_entity_1.Stage),
    typeorm_1.ManyToOne(() => stage_entity_1.Stage, (location) => location.treatmentsFiles, {
        nullable: false,
        cascade: true,
    }),
    __metadata("design:type", Promise)
], TreatmentFile.prototype, "stage", void 0);
TreatmentFile = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity(constants_1.TREATMENTS_FILES)
], TreatmentFile);
exports.TreatmentFile = TreatmentFile;
//# sourceMappingURL=treatment-file.entity.js.map