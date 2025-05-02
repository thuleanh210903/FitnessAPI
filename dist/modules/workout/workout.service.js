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
exports.WorkoutService = void 0;
const common_1 = require("@nestjs/common");
const workout_repository_1 = require("./workout.repository");
const mongoose_1 = require("mongoose");
const user_service_1 = require("../user/user.service");
const role_enum_1 = require("../../schema/enums/role.enum");
const path = require("path");
const fs = require("fs");
const cloudinary_service_1 = require("../../shared/services/cloudinary.service");
const exercise_service_1 = require("../exercise/exercise.service");
const log_workout_service_1 = require("../log-workout/log-workout.service");
const converToObjId_1 = require("../../shared/utils/converToObjId");
let WorkoutService = class WorkoutService {
    constructor(workoutRepository, cloudService, userService, exService, logService) {
        this.workoutRepository = workoutRepository;
        this.cloudService = cloudService;
        this.userService = userService;
        this.exService = exService;
        this.logService = logService;
        this.videoUploadPath = path.join(process.cwd(), 'src', 'shared', 'store');
        if (!fs.existsSync(this.videoUploadPath)) {
            fs.mkdirSync(this.videoUploadPath, { recursive: true });
        }
    }
    async create(createWorkoutDto) {
        const user = await this.userService.findOneById(createWorkoutDto.userId);
        if (user.role === role_enum_1.Role.USER) {
            createWorkoutDto.isUser = true;
        }
        createWorkoutDto.weeklySchedule.forEach((schedule) => {
            schedule.exercises.forEach((exercise) => {
                exercise.exerciseId = new mongoose_1.Types.ObjectId(exercise.exerciseId);
            });
        });
        createWorkoutDto.goal = new mongoose_1.Types.ObjectId(createWorkoutDto.goal);
        const firstEx = createWorkoutDto.weeklySchedule[0].exercises[0].exerciseId.toString();
        const foundEx = await this.exService.findOne(firstEx);
        createWorkoutDto.image = foundEx.thumbnail;
        return await this.workoutRepository.createWorkoutPlan(createWorkoutDto);
    }
    async getWorkoutPlanById(id) {
        const workoutPlanId = new mongoose_1.Types.ObjectId(id);
        const workoutPlan = await this.workoutRepository.findByIdWithDetails(workoutPlanId);
        if (!workoutPlan) {
            throw new common_1.NotFoundException('Workout Plan not found');
        }
        return workoutPlan;
    }
    async paginate(query, limit, page) {
        const totalRecords = await this.workoutRepository.countDocuments(query);
        const totalPages = Math.ceil(totalRecords / limit);
        const offset = (page - 1) * limit;
        const data = await this.workoutRepository.findAllPaginated(query, limit, offset);
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
    async findByGoal(goalId, limit = 10, offset = 0) {
        const goal = (0, converToObjId_1.convertObjectId)(goalId);
        return this.paginate({ goal: goal }, limit, offset);
    }
    async findOne(id) {
        const newId = new mongoose_1.Types.ObjectId(id);
        return await this.workoutRepository.findById(newId);
    }
    remove(id) {
        return `This action removes a #${id} workout`;
    }
    async findWorkOutByGoal(goal) {
        return await this.workoutRepository.findByGoal(goal);
    }
    async rcmPlan(dto) {
        const obj = (0, converToObjId_1.convertObjectId)(dto.goal);
        return await this.workoutRepository.findByQuery({
            bmi: dto.bmi,
            goal: obj,
        });
    }
    async findByQuery(goal, difficulty) {
        let obj = {};
        if (goal && mongoose_1.Types.ObjectId.isValid(goal)) {
            const goalId = new mongoose_1.Types.ObjectId(goal);
            obj.goal = goalId;
        }
        else if (goal) {
            console.error('Invalid goal ObjectId:', goal);
            throw new Error('Invalid goal ObjectId format');
        }
        if (difficulty) {
            obj.difficulty = difficulty;
        }
        console.log(obj);
        return await this.workoutRepository.findByQuery(obj);
    }
    async registerPlan(dto, userId) {
        const newUserId = (0, converToObjId_1.convertObjectId)(userId);
        const newPlanId = (0, converToObjId_1.convertObjectId)(dto.planId);
        const foundLog = await this.logService.getOne(newPlanId, newUserId);
        if (foundLog) {
            throw new common_1.BadRequestException('Exist log');
        }
        const result = await this.logService.create(userId, dto.planId);
        const foundUser = await this.userService.findOneById(newUserId);
        const foundPlan = await this.findOne(dto.planId);
        if (!foundPlan) {
            throw new common_1.BadRequestException('Not found plan');
        }
        foundPlan.userIds.push(newUserId);
        await foundPlan.save();
        if (!foundUser) {
            throw new common_1.BadRequestException();
        }
        const { selectedPlans } = foundUser;
        const newSelect = [...selectedPlans];
        newSelect.forEach((plan) => {
            plan.isUsing = false;
            return plan;
        });
        newSelect.push({
            plan_id: newPlanId,
            isUsing: true,
        });
        foundUser.selectedPlans = newSelect;
        await foundUser.save();
        return result;
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
    async createByTrainer(dto, pathThumb) {
        const obj = (0, converToObjId_1.convertObjectId)(dto.userId);
        const goal = (0, converToObjId_1.convertObjectId)(dto.goal);
        dto.goal = goal;
        const foundTrainer = await this.userService.findOneById(obj);
        if (foundTrainer.role === role_enum_1.Role.USER) {
            throw new common_1.ForbiddenException();
        }
        const thumbUrl = await this.cloudService.uploadImage(pathThumb);
        dto.image = thumbUrl.url;
        return await this.workoutRepository.create(dto);
    }
    async addExToPlan(id, arr) {
        const obj = (0, converToObjId_1.convertObjectId)(id);
        const foundPlan = await this.workoutRepository.findById(obj);
        if (!foundPlan) {
            throw new common_1.NotFoundException('Workout plan not found');
        }
        foundPlan.weeklySchedule.push(...arr);
        return await foundPlan.save();
    }
    async updateInformationPlan(id, dto, image) {
        const { goal, ...other } = dto;
        const objId = (0, converToObjId_1.convertObjectId)(id);
        let objGoal;
        if (goal) {
            objGoal = (0, converToObjId_1.convertObjectId)(goal);
        }
        if (image) {
            const thumbUrl = await this.cloudService.uploadImage(image);
            other.image = thumbUrl.url;
        }
        const filter = {
            _id: objId,
        };
        const update = {
            ...other,
            goal: objGoal,
        };
        const option = {
            new: true,
        };
        return await this.workoutRepository.updatePlan(filter, update, option);
    }
    async updateWeeklySchedule(id, dto) {
        const objId = (0, converToObjId_1.convertObjectId)(id);
        dto.weeklySchedule.forEach((schedule) => {
            schedule.exercises.forEach((exercise) => {
                exercise.exerciseId = new mongoose_1.Types.ObjectId(exercise.exerciseId);
            });
        });
        const { weeklySchedule } = dto;
        const filter = {
            _id: objId,
        };
        const update = {
            weeklySchedule,
        };
        const option = {
            new: true,
        };
        return await this.workoutRepository.updatePlan(filter, update, option);
    }
    async getWorkoutRegistedByUser(userId) {
        return await this.userService.findOneById(userId);
    }
};
exports.WorkoutService = WorkoutService;
exports.WorkoutService = WorkoutService = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => log_workout_service_1.LogWorkoutService))),
    __metadata("design:paramtypes", [workout_repository_1.WorkoutRepository,
        cloudinary_service_1.CloudinaryService,
        user_service_1.UserService,
        exercise_service_1.ExerciseService,
        log_workout_service_1.LogWorkoutService])
], WorkoutService);
//# sourceMappingURL=workout.service.js.map