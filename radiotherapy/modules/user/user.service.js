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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(_userRepository) {
        this._userRepository = _userRepository;
    }
    async create(createUserInput) {
        const username = await this.findByUsername(createUserInput.username);
        if (username)
            throw new common_1.BadRequestException('El nombre de usuario introducido ya existe');
        const newUser = this._userRepository.create(createUserInput);
        return await this._userRepository.save(newUser);
    }
    async findAll() {
        return await this._userRepository.find();
    }
    async findOne(id) {
        const user = await this._userRepository.findOne(id);
        if (this.isUser(user))
            return user;
    }
    async update(id, updateUserInput) {
        const user = this._userRepository.create(updateUserInput);
        const userUpdated = (await this._userRepository.update(id, user)).affected;
        if (!userUpdated)
            throw new common_1.BadRequestException('Ha ocurrido un error al modificar el usuario');
        return await this.findOne(id);
    }
    async remove(id) {
        const userDeteled = (await this._userRepository.delete(id)).affected;
        if (!userDeteled)
            throw new common_1.BadRequestException('Ha ocurrido un error al eliminar el usuario');
        return id;
    }
    async findByUsername(username) {
        return await this._userRepository
            .createQueryBuilder('users')
            .where({
            username,
        })
            .addSelect('users.password')
            .getOne();
    }
    isUser(user) {
        if (!user)
            throw new common_1.NotFoundException('No se encuentra el usuario');
        return true;
    }
};
UserService = __decorate([
    common_2.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map