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
exports.Location = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const treatment_file_entity_1 = require("../../treatment-file/entities/treatment-file.entity");
const shared_1 = require("../../../shared");
const constants_1 = require("../../../constants");
let Location = class Location extends shared_1.Common {
};
__decorate([
    graphql_1.Field(() => [treatment_file_entity_1.TreatmentFile]),
    typeorm_1.OneToMany(() => treatment_file_entity_1.TreatmentFile, (treatmentFile) => treatmentFile.location),
    __metadata("design:type", Promise)
], Location.prototype, "treatmentsFiles", void 0);
Location = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity(constants_1.LOCATIONS)
], Location);
exports.Location = Location;
//# sourceMappingURL=location.entity.js.map