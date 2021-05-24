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
exports.PatientInput = exports.Patient = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../../constants");
let Patient = class Patient {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], Patient.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Patient.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Patient.prototype, "lastName", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsString(),
    class_validator_1.Length(11),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Patient.prototype, "clinic", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], Patient.prototype, "age", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], Patient.prototype, "phone", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Patient.prototype, "municipality", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Patient.prototype, "province", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Patient.prototype, "address", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Patient.prototype, "sex", void 0);
Patient = __decorate([
    graphql_1.InputType()
], Patient);
exports.Patient = Patient;
let PatientInput = class PatientInput extends graphql_1.PartialType(Patient) {
};
PatientInput = __decorate([
    graphql_1.InputType()
], PatientInput);
exports.PatientInput = PatientInput;
//# sourceMappingURL=patient.input.js.map