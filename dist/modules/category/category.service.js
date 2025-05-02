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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const category_schema_1 = require("../../schema/category.schema");
const mongoose_2 = require("mongoose");
const path = require("path");
const fs = require("fs");
const cloudinary_service_1 = require("../../shared/services/cloudinary.service");
const exercise_service_1 = require("../exercise/exercise.service");
let CategoryService = class CategoryService {
    constructor(cateModel, cloudService, exService) {
        this.cateModel = cateModel;
        this.cloudService = cloudService;
        this.exService = exService;
        this.videoUploadPath = path.join(process.cwd(), 'src', 'shared', 'image');
        if (!fs.existsSync(this.videoUploadPath)) {
            fs.mkdirSync(this.videoUploadPath, { recursive: true });
        }
    }
    async create(createCategoryDto, file) {
        const url = await this.cloudService.uploadImage(file);
        fs.unlinkSync(file);
        const newCate = new this.cateModel({
            image: url.url,
            name: createCategoryDto.name,
        });
        return await newCate.save();
    }
    async findByCategory(categoryId) {
        return await this.exService.findByCategory(categoryId);
    }
    async findAll() {
        return await this.cateModel.find();
    }
    async findOne(id) {
        return await this.cateModel.findById(id);
    }
    async update(id, updateGoalDto, path) {
        const foundCate = await this.cateModel.findById(id);
        if (!foundCate) {
            throw new common_1.BadRequestException('Category not found');
        }
        if (updateGoalDto.name) {
            foundCate.name = updateGoalDto.name;
        }
        if (path) {
            const url = await this.cloudService.uploadImage(path);
            fs.unlinkSync(path);
            foundCate.image = url.url;
        }
        return await foundCate.save();
    }
    remove(id) {
        return `This action removes a #${id} category`;
    }
    async saveVideoToServer(videoFile) {
        const fileName = `${Date.now()}-${videoFile.originalname}`;
        const filePath = path.join(this.videoUploadPath, fileName);
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, videoFile.buffer, (err) => {
                if (err) {
                    reject('Failed to save video');
                }
                resolve(filePath);
            });
        });
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_schema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        cloudinary_service_1.CloudinaryService,
        exercise_service_1.ExerciseService])
], CategoryService);
//# sourceMappingURL=category.service.js.map