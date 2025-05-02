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
exports.ExerciseService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_service_1 = require("../../shared/services/cloudinary.service");
const exercise_repository_1 = require("./exercise.repository");
const path = require("path");
const fs = require("fs");
const user_service_1 = require("../user/user.service");
const role_enum_1 = require("../../schema/enums/role.enum");
const sharp = require("sharp");
const converToObjId_1 = require("../../shared/utils/converToObjId");
let ExerciseService = class ExerciseService {
    constructor(cloudService, exRepository, userService) {
        this.cloudService = cloudService;
        this.exRepository = exRepository;
        this.userService = userService;
        this.videoUploadPath = path.join(process.cwd(), 'src', 'shared', 'store');
        if (!fs.existsSync(this.videoUploadPath)) {
            fs.mkdirSync(this.videoUploadPath, { recursive: true });
        }
    }
    async create(createExerciseDto, pathFile) {
        const user = await this.userService.findOneById(createExerciseDto.createdBy);
        if (user.role !== role_enum_1.Role.TRAINER) {
            throw new common_1.ForbiddenException();
        }
        const gifData = fs.readFileSync(pathFile);
        const thumbnailPath = pathFile.replace('.gif', '.png');
        await sharp(gifData, { pages: 1 }).png().toFile(thumbnailPath);
        const videoUrl = await this.cloudService.uploadImage(pathFile);
        const thumbnailUrl = await this.cloudService.uploadImage(thumbnailPath);
        createExerciseDto.gifUrl = videoUrl.url;
        createExerciseDto.thumbnail = thumbnailUrl.url;
        fs.unlink(pathFile, (err) => {
            if (err)
                console.error('Error deleting file:', err);
        });
        fs.unlink(thumbnailPath, (err) => {
            if (err)
                console.error('Error deleting file:', err);
        });
        return await this.exRepository.create(createExerciseDto);
    }
    async paginate(query, limit, page) {
        const totalRecords = await this.exRepository.countDocuments(query);
        const totalPages = Math.ceil(totalRecords / limit);
        const offset = (page - 1) * limit;
        const data = await this.exRepository.findAllPaginated(query, limit, offset);
        return {
            totalPages,
            currentPage: page,
            limit: limit,
            data,
        };
    }
    async findAll(limit = 10, page = 1) {
        return await this.paginate({}, limit, page);
    }
    async findByCategory(categoryId, limit = 10, offset = 0) {
        const category = (0, converToObjId_1.convertObjectId)(categoryId);
        return this.paginate({ category: category }, limit, offset);
    }
    async findOne(id) {
        return await this.exRepository.findById(id);
    }
    async update(id, updateExerciseDto, pathFile) {
        const obj = (0, converToObjId_1.convertObjectId)(id);
        let objCate;
        let objCreatedBy;
        const { category, createdBy, ...other } = updateExerciseDto;
        objCreatedBy = (0, converToObjId_1.convertObjectId)(createdBy);
        const foundTrainer = await this.userService.findOneById(objCreatedBy);
        if (foundTrainer.role === role_enum_1.Role.USER) {
            throw new common_1.ForbiddenException();
        }
        if (category) {
            objCate = (0, converToObjId_1.convertObjectId)(category);
        }
        if (pathFile) {
            const gifData = fs.readFileSync(pathFile);
            const thumbnailPath = pathFile.replace('.gif', '.png');
            await sharp(gifData, { pages: 1 }).png().toFile(thumbnailPath);
            const videoUrl = await this.cloudService.uploadImage(pathFile);
            const thumbnailUrl = await this.cloudService.uploadImage(thumbnailPath);
            other.gifUrl = videoUrl.url;
            other.thumbnail = thumbnailUrl.url;
            fs.unlink(pathFile, (err) => {
                if (err)
                    console.error('Error deleting file:', err);
            });
            fs.unlink(thumbnailPath, (err) => {
                if (err)
                    console.error('Error deleting file:', err);
            });
        }
        const filter = {
            _id: obj,
        };
        const update = {
            ...other,
            category: objCate,
            createdBy: objCreatedBy,
        };
        const option = {
            new: true,
        };
        return await this.exRepository.updateExercise(filter, update, option);
    }
    remove(id) {
        return `This action removes a #${id} exercise`;
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
exports.ExerciseService = ExerciseService;
exports.ExerciseService = ExerciseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cloudinary_service_1.CloudinaryService,
        exercise_repository_1.ExerciseRepository,
        user_service_1.UserService])
], ExerciseService);
//# sourceMappingURL=exercise.service.js.map