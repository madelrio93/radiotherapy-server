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
exports.CreateTreatmentFileInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../../constants");
const shared_1 = require("../../../shared");
const patient_input_1 = require("./patient.input");
let CreateTreatmentFileInput = class CreateTreatmentFileInput {
};
__decorate([
    graphql_1.Field(),
    class_validator_1.IsDate(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], CreateTreatmentFileInput.prototype, "consultationDate", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateTreatmentFileInput.prototype, "status", void 0);
__decorate([
    graphql_1.Field(() => patient_input_1.PatientInput),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", patient_input_1.PatientInput)
], CreateTreatmentFileInput.prototype, "patient", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", shared_1.UpdateCommonInput)
], CreateTreatmentFileInput.prototype, "speciaList", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", shared_1.UpdateCommonInput)
], CreateTreatmentFileInput.prototype, "equipment", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", shared_1.UpdateCommonInput)
], CreateTreatmentFileInput.prototype, "location", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", shared_1.UpdateCommonInput)
], CreateTreatmentFileInput.prototype, "stage", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", shared_1.UpdateCommonInput)
], CreateTreatmentFileInput.prototype, "origin", void 0);
CreateTreatmentFileInput = __decorate([
    graphql_1.InputType()
], CreateTreatmentFileInput);
exports.CreateTreatmentFileInput = CreateTreatmentFileInput;
//# sourceMappingURL=create-treatment-file.input.js.map