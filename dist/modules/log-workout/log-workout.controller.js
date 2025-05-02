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
exports.LogWorkoutController = void 0;
const common_1 = require("@nestjs/common");
const log_workout_service_1 = require("./log-workout.service");
const update_log_workout_dto_1 = require("./dto/update-log-workout.dto");
const get_all_day_dto_1 = require("./dto/get-all-day.dto");
const jwt_auth_guard_1 = require("../../shared/guards/jwt-auth.guard");
const user_decorator_1 = require("../../shared/decorators/user.decorator");
const swagger_1 = require("@nestjs/swagger");
const day_detail_dto_1 = require("./dto/day-detail.dto");
const update_ex_log_dto_1 = require("./dto/update-ex-log.dto");
let LogWorkoutController = class LogWorkoutController {
    constructor(logWorkoutService) {
        this.logWorkoutService = logWorkoutService;
    }
    async getLogWorkout(user) {
        console.log(user);
        return await this.logWorkoutService.getLogWorkout(user._id);
    }
    async findOne(dto, user) {
        return await this.logWorkoutService.findOne(dto, user._id);
    }
    update(id, updateLogWorkoutDto) {
        return this.logWorkoutService.update(+id, updateLogWorkoutDto);
    }
    remove(id) {
        return this.logWorkoutService.remove(+id);
    }
    async detailDay(dto, user) {
        return await this.logWorkoutService.dayDetail(dto, user._id);
    }
    async complateEx(dto, user) {
        return await this.logWorkoutService.updateExerciseComplete(dto.workoutLogId, dto.dayNumber, dto.exerciseIndex);
    }
};
exports.LogWorkoutController = LogWorkoutController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get plan  register by user' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/user'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LogWorkoutController.prototype, "getLogWorkout", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'detail 1 workout plan registed by user' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':planId'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_all_day_dto_1.GetAllDayDTO, Object]),
    __metadata("design:returntype", Promise)
], LogWorkoutController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_log_workout_dto_1.UpdateLogWorkoutDto]),
    __metadata("design:returntype", void 0)
], LogWorkoutController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LogWorkoutController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get detail 1 day of workout plan registed by user' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':planId/:numberDay'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [day_detail_dto_1.DayDetailDTO, Object]),
    __metadata("design:returntype", Promise)
], LogWorkoutController.prototype, "detailDay", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update complete ex' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('complete-excicrise'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_ex_log_dto_1.UpdateExerciseCompleteDTO, Object]),
    __metadata("design:returntype", Promise)
], LogWorkoutController.prototype, "complateEx", null);
exports.LogWorkoutController = LogWorkoutController = __decorate([
    (0, swagger_1.ApiTags)('Log workout'),
    (0, swagger_1.ApiBearerAuth)('jwt'),
    (0, common_1.Controller)('log-workout'),
    __metadata("design:paramtypes", [log_workout_service_1.LogWorkoutService])
], LogWorkoutController);
//# sourceMappingURL=log-workout.controller.js.map