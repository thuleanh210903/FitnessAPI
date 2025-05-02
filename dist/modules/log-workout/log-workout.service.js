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
exports.LogWorkoutService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const workout_log_schema_1 = require("../../schema/workout-log.schema");
const mongoose_2 = require("mongoose");
const workout_service_1 = require("../workout/workout.service");
const converToObjId_1 = require("../../shared/utils/converToObjId");
let LogWorkoutService = class LogWorkoutService {
    constructor(logModel, workoutService) {
        this.logModel = logModel;
        this.workoutService = workoutService;
    }
    async create(userId, planId) {
        const newUserId = (0, converToObjId_1.convertObjectId)(userId);
        const newPlanId = (0, converToObjId_1.convertObjectId)(planId);
        const foundPlan = await this.workoutService.findOne(planId);
        if (!foundPlan) {
            throw new common_1.BadRequestException('Not found plan');
        }
        const { weeklySchedule, totalDayOfPlan, daysPerWeek } = foundPlan;
        let days = [];
        let temp = 1;
        for (let index = 0; index < totalDayOfPlan; index++) {
            const listEx = weeklySchedule[temp - 1].exercises.map((obj) => {
                const objTemp = {
                    ...obj,
                    isComplete: false,
                };
                return objTemp;
            });
            days.push({
                dayNumber: index + 1,
                dayTitle: weeklySchedule[temp - 1].title,
                exercises: listEx,
            });
            if (temp === daysPerWeek) {
                temp = 1;
            }
            else {
                temp++;
            }
        }
        const workoutPlan = new this.logModel({
            userId: newUserId,
            planId: newPlanId,
            days: days,
        });
        return await workoutPlan.save();
    }
    findAll() {
        return `This action returns all logWorkout`;
    }
    async findOne(dto, user) {
        const planId = (0, converToObjId_1.convertObjectId)(dto.planId);
        return await this.logModel.find({
            planId: planId,
            userId: user,
        });
    }
    async getOne(planId, userId) {
        return await this.logModel.findOne({
            planId: planId,
            userId: userId,
        });
    }
    update(id, updateLogWorkoutDto) {
        return `This action updates a #${id} logWorkout`;
    }
    remove(id) {
        return `This action removes a #${id} logWorkout`;
    }
    async dayDetail(dto, user) {
        const planId = (0, converToObjId_1.convertObjectId)(dto.planId);
        const result = await this.logModel
            .findOne({
            planId: planId,
            userId: user,
        })
            .populate('days.exercises.exerciseId', 'gifUrl steps name')
            .exec();
        if (!result) {
            throw new common_1.NotFoundException('Log workout not found');
        }
        const day = result.days.find((day) => day.dayNumber === +dto.numberDay);
        if (!day) {
            throw new common_1.NotFoundException('Day not found');
        }
        return {
            id: result._id,
            day,
        };
    }
    async updateExerciseComplete(workoutLogId, dayNumber, exerciseIndex) {
        const id = (0, converToObjId_1.convertObjectId)(workoutLogId);
        const workoutLog = await this.logModel.findById(id).exec();
        if (!workoutLog) {
            throw new Error('WorkoutLog not found');
        }
        const dayLog = workoutLog.days.find((day) => day.dayNumber === dayNumber);
        if (!dayLog) {
            throw new Error('DayLog not found');
        }
        const exerciseLog = dayLog.exercises[exerciseIndex];
        if (!exerciseLog) {
            throw new Error('ExerciseLog not found');
        }
        exerciseLog.isComplete = true;
        await workoutLog.save();
        return workoutLog;
    }
    async getLogWorkout(userId) {
        return await this.logModel
            .find({
            userId: userId,
        })
            .populate('planId', 'title difficulty description image')
            .select({
            days: false,
            _id: false,
        });
    }
};
exports.LogWorkoutService = LogWorkoutService;
exports.LogWorkoutService = LogWorkoutService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(workout_log_schema_1.WorkoutLog.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => workout_service_1.WorkoutService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        workout_service_1.WorkoutService])
], LogWorkoutService);
//# sourceMappingURL=log-workout.service.js.map