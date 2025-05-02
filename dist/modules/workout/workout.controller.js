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
exports.WorkoutController = void 0;
const common_1 = require("@nestjs/common");
const workout_service_1 = require("./workout.service");
const swagger_1 = require("@nestjs/swagger");
const get_detail_workout_dto_1 = require("./dto/get-detail.workout-dto");
const user_decorator_1 = require("../../shared/decorators/user.decorator");
const jwt_auth_guard_1 = require("../../shared/guards/jwt-auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const register_workout_dto_1 = require("./dto/register-workout.dto");
const query_workout_dto_1 = require("./dto/query-workout.dto");
const create_plan_dto_1 = require("./dto/create-plan.dto");
const add_ex_dto_1 = require("./dto/add.ex.dto");
const rcm_plan_dto_1 = require("./dto/rcm-plan.dto");
const update_workout_dto_1 = require("./dto/update-workout.dto");
const update_week_dto_1 = require("./dto/update-week.dto");
const paginationQuery_dto_1 = require("../../shared/utils/paginationQuery.dto");
let WorkoutController = class WorkoutController {
    constructor(workoutService) {
        this.workoutService = workoutService;
    }
    async create(dto, user, file) {
        let path = null;
        if (file) {
            path = await this.workoutService.saveVideoToServer(file);
        }
        else {
            path = process.env.DEFAULT_THUMB_PLAN;
        }
        dto.userId = user._id;
        return await this.workoutService.createByTrainer(dto, path);
    }
    async updateInforPlan(id, dto, user, file) {
        let path = null;
        if (file) {
            path = await this.workoutService.saveVideoToServer(file);
            return await this.workoutService.updateInformationPlan(id, dto, path);
        }
        return await this.workoutService.updateInformationPlan(id, dto);
    }
    async updatePlanWithEx(id, dto, user) {
        return await this.workoutService.updateWeeklySchedule(id, dto);
    }
    async addExToPlan(id, dto) {
        return await this.workoutService.addExToPlan(id, dto.schedules);
    }
    async rcmPlan(dto) {
        return await this.workoutService.rcmPlan(dto);
    }
    async findByQuery(dto) {
        console.log(dto);
        return await this.workoutService.findByQuery(dto.goal, dto.difficulty);
    }
    async getWorkoutRegistedByUser(user) {
        console.log(user);
        return await this.workoutService.getWorkoutRegistedByUser(user._id);
    }
    async findAll(paginationQuery) {
        return await this.workoutService.findAll(paginationQuery.limit, paginationQuery.page);
    }
    async findByCategory(paginationQuery, goalId) {
        console.log(goalId);
        return await this.workoutService.findByGoal(goalId, paginationQuery.limit, paginationQuery.page);
    }
    async findOne(dto) {
        return await this.workoutService.findOne(dto.id);
    }
    remove(id) {
        return this.workoutService.remove(+id);
    }
    async registerPlan(dto, user) {
        return await this.workoutService.registerPlan(dto, user._id.toString());
    }
};
exports.WorkoutController = WorkoutController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create workout plan without ex' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_plan_dto_1.CreatePlanDto, Object, Object]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update basic information of plan without ex' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id/update-infor'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_workout_dto_1.UpdateWorkoutDto, Object, Object]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "updateInforPlan", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update ex of plan' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id/update-ex'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_week_dto_1.UpdateWeeklyScheduleDto, Object]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "updatePlanWithEx", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add ex to plan' }),
    (0, common_1.Post)(':id/add-schedule'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_ex_dto_1.AddEXDto]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "addExToPlan", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'rcm workout plan with bmi and goal' }),
    (0, common_1.Get)('/recommend-plan'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rcm_plan_dto_1.RecommendPlanDTO]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "rcmPlan", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'find workout plan' }),
    (0, common_1.Get)('/find'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_workout_dto_1.QueryWorkoutDTO]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "findByQuery", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get plans is registed by user' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/user-registed'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "getWorkoutRegistedByUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all workout plan' }),
    (0, common_1.Get)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginationQuery_dto_1.PaginationQueryDTO]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'find by goal' }),
    (0, common_1.Get)('/goal/:goalId/'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Param)('goalId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginationQuery_dto_1.PaginationQueryDTO, String]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "findByCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'detail workout plan' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_detail_workout_dto_1.GetDetailWorkOutDTO]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkoutController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'User đăng kí workout plan' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('register-plan'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_workout_dto_1.RegisterWorkoutDTO, Object]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "registerPlan", null);
exports.WorkoutController = WorkoutController = __decorate([
    (0, swagger_1.ApiTags)('workout'),
    (0, swagger_1.ApiBearerAuth)('jwt'),
    (0, common_1.Controller)('workout'),
    __metadata("design:paramtypes", [workout_service_1.WorkoutService])
], WorkoutController);
//# sourceMappingURL=workout.controller.js.map