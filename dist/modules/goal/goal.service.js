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
exports.GoalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const goal_schema_1 = require("../../schema/goal.schema");
const mongoose_2 = require("@nestjs/mongoose");
const workout_service_1 = require("../workout/workout.service");
const cloudinary_service_1 = require("../../shared/services/cloudinary.service");
const path = require("path");
const fs = require("fs");
const converToObjId_1 = require("../../shared/utils/converToObjId");
let GoalService = class GoalService {
    constructor(goalModel, workoutService, cloudService) {
        this.goalModel = goalModel;
        this.workoutService = workoutService;
        this.cloudService = cloudService;
        this.videoUploadPath = path.join(process.cwd(), 'src', 'shared', 'store');
        if (!fs.existsSync(this.videoUploadPath)) {
            fs.mkdirSync(this.videoUploadPath, { recursive: true });
        }
    }
    async create(createGoalDto, pathFile) {
        const url = await this.cloudService.uploadImage(pathFile);
        fs.unlinkSync(pathFile);
        const newGoal = await this.goalModel.create({
            title: createGoalDto.title,
            image: url.url,
        });
        return await newGoal.save();
    }
    async findAll() {
        return await this.goalModel.find();
    }
    findOne(id) {
        return `This action returns a #${id} goal`;
    }
    async update(id, updateGoalDto, path) {
        const foundGoal = await this.goalModel.findById(id);
        console.log(foundGoal);
        console.log(updateGoalDto);
        if (!foundGoal) {
            throw new common_1.BadRequestException('Goal not found');
        }
        if (updateGoalDto.title) {
            foundGoal.title = updateGoalDto.title;
        }
        if (path) {
            const url = await this.cloudService.uploadImage(path);
            fs.unlinkSync(path);
            foundGoal.image = url.url;
        }
        return await foundGoal.save();
    }
    remove(id) {
        return `This action removes a #${id} goal`;
    }
    async findOneGoal(id) {
        const goal = (0, converToObjId_1.convertObjectId)(id);
        return await this.goalModel.findById(goal);
    }
    async findManyById(id) {
        return await this.workoutService.findWorkOutByGoal(id);
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
exports.GoalService = GoalService;
exports.GoalService = GoalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(goal_schema_1.Goal.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        workout_service_1.WorkoutService,
        cloudinary_service_1.CloudinaryService])
], GoalService);
//# sourceMappingURL=goal.service.js.map