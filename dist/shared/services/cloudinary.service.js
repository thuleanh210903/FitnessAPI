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
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const api_config_service_1 = require("./api-config.service");
const cloudinary_1 = require("cloudinary");
let CloudinaryService = class CloudinaryService {
    constructor(configService) {
        this.configService = configService;
        const { cloudName, apiKey, apiSecret, apiUrl } = this.configService.cloudinaryConfig;
        this.cloudName = cloudName;
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.apiUrl = apiUrl;
        cloudinary_1.v2.config({
            cloud_name: this.cloudName,
            api_key: this.apiKey,
            api_secret: this.apiSecret,
        });
    }
    async uploadImage(file) {
        try {
            const result = await cloudinary_1.v2.uploader.upload(file, {
                folder: 'gif',
            });
            return {
                publicId: result.public_id,
                url: result.secure_url,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException({
                message: 'Upload failed',
            });
        }
    }
    async getImageDetails(publicId) {
        try {
            const result = await cloudinary_1.v2.api.resource(publicId);
            return result;
        }
        catch (error) {
            throw new common_1.NotFoundException({
                message: 'Upload failed',
            });
        }
    }
    async deleteImage(publicId) {
        try {
            const result = await cloudinary_1.v2.uploader.destroy(publicId);
            return result;
        }
        catch (error) {
            throw new common_1.NotFoundException({
                message: 'Upload failed',
            });
        }
    }
};
exports.CloudinaryService = CloudinaryService;
exports.CloudinaryService = CloudinaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [api_config_service_1.ApiConfigService])
], CloudinaryService);
//# sourceMappingURL=cloudinary.service.js.map