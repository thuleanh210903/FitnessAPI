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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const api_config_service_1 = require("../../shared/services/api-config.service");
const firebase_config_1 = require("../../shared/firebase/firebase.config");
const mongoose_1 = require("@nestjs/mongoose");
const goal_schema_1 = require("../../schema/goal.schema");
const mongoose_2 = require("mongoose");
const category_schema_1 = require("../../schema/category.schema");
const role_enum_1 = require("../../schema/enums/role.enum");
let AuthService = class AuthService {
    constructor(goalModel, cateModel, userService, jwtService, configService) {
        this.goalModel = goalModel;
        this.cateModel = cateModel;
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async test() {
        const newUser = new this.cateModel({
            name: 'Co chan',
            image: 'https://citigym.com.vn/storage/uploads/hoanghh-seo/len-co-chan-hieu-qua-voi-7-bai-tap-chan-moi-ngay-1.jpg',
        });
        return await newUser.save();
    }
    async signUpEmail(signUpEmailDto) {
        const passwordHashed = await bcrypt.hash(signUpEmailDto.password, 10);
        const user = await this.userService.create(signUpEmailDto.email, passwordHashed);
        return user;
    }
    async loginByEmail(dto) {
        const { email, password } = dto;
        const foundUser = await this.userService.findOneOrThrowByEmail(email);
        const isMatch = await bcrypt.compare(password, foundUser.password);
        if (!isMatch) {
            throw new common_1.BadRequestException('Email or password is wrong');
        }
        const token = this.getAccessToken(foundUser._id, email);
        return {
            accessToken: token,
            email: foundUser.email,
            role: foundUser.role,
        };
    }
    async loginWithoutUser(dto) {
        const { email, password } = dto;
        const foundUser = await this.userService.findOneOrThrowByEmail(email);
        const isMatch = await bcrypt.compare(password, foundUser.password);
        if (!isMatch) {
            throw new common_1.BadRequestException('Email or password is wrong');
        }
        if (foundUser.role === role_enum_1.Role.USER) {
            throw new common_1.ForbiddenException();
        }
        const token = this.getAccessToken(foundUser._id, email);
        return {
            accessToken: token,
            email: foundUser.email,
            role: foundUser.role,
        };
    }
    getAccessToken(userId, email) {
        const payload = { sub: userId, email: email };
        return this.jwtService.sign(payload);
    }
    async loginSocial(dto) {
        const { idToken, email } = dto;
        const { name, picture } = await firebase_config_1.firebaseAdmin.auth().verifyIdToken(idToken);
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            const newUser = await this.userService.createBySocial(email, name);
            const token = this.getAccessToken(newUser._id, email);
            return {
                accessToken: token,
                email: newUser.email,
            };
        }
        const token = this.getAccessToken(user._id, email);
        return {
            accessToken: token,
            email: user.email,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(goal_schema_1.Goal.name)),
    __param(1, (0, mongoose_1.InjectModel)(category_schema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        user_service_1.UserService,
        jwt_1.JwtService,
        api_config_service_1.ApiConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map