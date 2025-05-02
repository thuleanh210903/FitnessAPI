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
exports.UpdateWeeklyScheduleDto = exports.ScheduleDto = exports.ExerciseDetailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const mongoose_1 = require("mongoose");
class ExerciseDetailDto {
}
exports.ExerciseDetailDto = ExerciseDetailDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '6736cde983c0784d8d84ffac' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], ExerciseDetailDto.prototype, "exerciseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ExerciseDetailDto.prototype, "reps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ExerciseDetailDto.prototype, "sets", void 0);
class ScheduleDto {
}
exports.ScheduleDto = ScheduleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Day 1 - Workout' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ScheduleDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ScheduleDto.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ExerciseDetailDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExerciseDetailDto),
    __metadata("design:type", Array)
], ScheduleDto.prototype, "exercises", void 0);
class UpdateWeeklyScheduleDto {
}
exports.UpdateWeeklyScheduleDto = UpdateWeeklyScheduleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ScheduleDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ScheduleDto),
    __metadata("design:type", Array)
], UpdateWeeklyScheduleDto.prototype, "weeklySchedule", void 0);
//# sourceMappingURL=update-week.dto.js.map