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
exports.CreateWorkoutPlanDto = exports.ScheduleDto = exports.ExerciseDetailDto = void 0;
const bmi_enum_1 = require("../../../schema/enums/bmi.enum");
const difficulty_enum_1 = require("../../../schema/enums/difficulty.enum");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class ExerciseDetailDto {
}
exports.ExerciseDetailDto = ExerciseDetailDto;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], ExerciseDetailDto.prototype, "exerciseId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ExerciseDetailDto.prototype, "reps", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ExerciseDetailDto.prototype, "sets", void 0);
class ScheduleDto {
}
exports.ScheduleDto = ScheduleDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tên ngày tập',
        example: 'Biceps+Core',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], ScheduleDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ngày tập thứ mấy',
        example: '1',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ScheduleDto.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Danh sách bài tập cho ngày tập luyện',
        type: [ExerciseDetailDto],
        example: [
            {
                exerciseId: '673341d2af810e16b2cfd502',
                reps: 12,
                sets: 3,
            },
            {
                exerciseId: '673342c8af810e16b2cfd506',
                reps: 10,
                sets: 4,
            },
            {
                exerciseId: '673342feaf810e16b2cfd50e',
                reps: 10,
                sets: 4,
            },
        ],
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ScheduleDto.prototype, "exercises", void 0);
class CreateWorkoutPlanDto {
}
exports.CreateWorkoutPlanDto = CreateWorkoutPlanDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tên của kế hoạch tập luyện',
        example: 'Beginner Full Body Workout',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateWorkoutPlanDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWorkoutPlanDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateWorkoutPlanDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Độ khó của kế hoạch tập luyện',
        enum: difficulty_enum_1.Difficulty,
        example: difficulty_enum_1.Difficulty.BEGINNER,
    }),
    (0, class_validator_1.IsEnum)(difficulty_enum_1.Difficulty),
    __metadata("design:type", String)
], CreateWorkoutPlanDto.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Số ngày tập trong một tuần',
        example: 3,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateWorkoutPlanDto.prototype, "daysPerWeek", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lịch tập trong tuần',
        type: [ScheduleDto],
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateWorkoutPlanDto.prototype, "weeklySchedule", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsMongoId)({ each: true }),
    __metadata("design:type", Array)
], CreateWorkoutPlanDto.prototype, "userIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID của mục tiêu kế hoạch tập luyện',
        example: '64c8b2d1e83d8a10fcd4e20c',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateWorkoutPlanDto.prototype, "goal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'BMI là bao nhiêu để được rcm plan này',
        example: bmi_enum_1.BMI.TooSkinny,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsEnum)(bmi_enum_1.BMI),
    __metadata("design:type", Number)
], CreateWorkoutPlanDto.prototype, "bmi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mô tả về kế hoạch tập luyện',
        example: 'A comprehensive workout plan for beginners.',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateWorkoutPlanDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateWorkoutPlanDto.prototype, "isUser", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateWorkoutPlanDto.prototype, "totalDayOfPlan", void 0);
//# sourceMappingURL=create-workout.dto.js.map