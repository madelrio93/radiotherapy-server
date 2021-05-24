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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(_userService, _jwtService) {
        this._userService = _userService;
        this._jwtService = _jwtService;
    }
    async validateUser({ username, password }) {
        const user = await this._userService.findByUsername(username);
        if (user && (await bcrypt_1.compare(password, user.password))) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async login({ username, password }) {
        const user = await this.validateUser({ username, password });
        this.userAccountVerify(user);
        const payload = {
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            isAdmin: user.isAdmin,
            active: user.active,
        };
        return this._jwtService.sign(payload);
    }
    userAccountVerify(user) {
        if (!user)
            throw new common_1.NotFoundException('Usuario y contraseña incorrrectas');
        if (!user.active)
            throw new common_1.UnauthorizedException('Su cuenta se encuentra desactivada por favor contacte al administrador');
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map