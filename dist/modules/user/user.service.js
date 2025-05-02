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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const mongoose_1 = require("mongoose");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(email, password) {
        const foundUser = await this.findOneByEmail(email);
        if (foundUser) {
            throw new common_1.BadRequestException('Email is exist');
        }
        return await this.userRepository.createByEmail(email, password);
    }
    async createBySocial(email, name) {
        const foundUser = await this.findOneByEmail(email);
        if (foundUser) {
            throw new common_1.BadRequestException('Email is exist');
        }
        return await this.userRepository.createBySocial(email, name);
    }
    async findAll() {
        return this.userRepository.findAll();
    }
    async findOneOrThrowById(id) {
        const foundUser = await this.userRepository.findOneUser({
            _id: id,
        });
        if (!foundUser) {
            throw new common_1.BadRequestException('User not found');
        }
        return foundUser;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
    async findOneOrThrowByEmail(email) {
        const foundUser = await this.userRepository.findOneUser({
            email: email,
        });
        if (!foundUser) {
            throw new common_1.BadRequestException('User not found');
        }
        return foundUser;
    }
    async findOneByEmail(email) {
        const foundUser = await this.userRepository.findOneUser({
            email: email,
        });
        return foundUser;
    }
    async updateBMI(dto, id) {
        await this.findOneOrThrowById(id);
        const updateUser = await this.userRepository.updateUser({
            profile: dto,
        }, id);
        const convertToM = dto.height / 100;
        const bmi = dto.weight / (convertToM * convertToM);
        return {
            updateUser,
            bmi,
        };
    }
    async updateGoal(dto, id) {
        const found = await this.findOneOrThrowById(id);
        const obj = new mongoose_1.Types.ObjectId(dto.goal);
        found.profile.goal = obj._id;
        return await this.userRepository.updateOne(found);
    }
    async findOneById(id) {
        return await this.userRepository.findOneUser({
            _id: id,
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map