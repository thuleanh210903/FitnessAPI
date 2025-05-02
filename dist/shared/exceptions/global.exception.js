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
exports.GlobalException = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let GlobalException = class GlobalException {
    constructor(config_service) {
        this.config_service = config_service;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception instanceof common_1.HttpException ? exception.getStatus() : 500;
        const message = exception instanceof common_1.HttpException ? exception.message : 'Internal server error';
        response.status(status).json({
            statusCode: status,
            message,
            error: this.config_service.get('NODE_ENV') === 'development'
                ? {
                    response: exception.response,
                    stack: exception.stack,
                }
                : null,
        });
    }
};
exports.GlobalException = GlobalException;
exports.GlobalException = GlobalException = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], GlobalException);
//# sourceMappingURL=global.exception.js.map