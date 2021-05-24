"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = __importDefault(require("../config"));
exports.default = typeorm_1.TypeOrmModule.forRootAsync({
    useFactory: () => config_1.default,
});
//# sourceMappingURL=database.service.js.map