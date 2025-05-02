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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
const signUpEmail_dto_1 = require("./dto/signUpEmail.dto");
const loginEmail_dto_1 = require("./dto/loginEmail.dto");
const jwt_auth_guard_1 = require("../../shared/guards/jwt-auth.guard");
const user_decorator_1 = require("../../shared/decorators/user.decorator");
const loginSocial_dto_1 = require("./dto/loginSocial.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async hello(user) {
        return await this.authService.test();
    }
    async signUpByEmail(dto) {
        return await this.authService.signUpEmail(dto);
    }
    async loginByEmail(dto) {
        return await this.authService.loginByEmail(dto);
    }
    async loginBySocial(dto) {
        return await this.authService.loginSocial(dto);
    }
    async loginWithoutUser(dto) {
        return await this.authService.loginByEmail(dto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "hello", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'sign up' }),
    (0, common_1.Post)('/sign-up'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signUpEmail_dto_1.SignUpEmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUpByEmail", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'login' }),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginEmail_dto_1.LoginEmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginByEmail", null);
__decorate([
    (0, common_1.Post)('/login-social'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginSocial_dto_1.LoginSocialDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginBySocial", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'login without user' }),
    (0, common_1.Post)('/login-trainer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginEmail_dto_1.LoginEmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginWithoutUser", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, swagger_1.ApiBearerAuth)('jwt'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map