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
exports.UpdateSpecialistInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const create_specialist_input_1 = require("./create-specialist.input");
let UpdateSpecialistInput = class UpdateSpecialistInput extends graphql_1.PartialType(create_specialist_input_1.CreateSpecialistInput) {
};
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], UpdateSpecialistInput.prototype, "id", void 0);
UpdateSpecialistInput = __decorate([
    graphql_1.InputType()
], UpdateSpecialistInput);
exports.UpdateSpecialistInput = UpdateSpecialistInput;
//# sourceMappingURL=update-specialist.input.js.map