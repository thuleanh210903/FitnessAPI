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
exports.AddEXDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class ExerciseDetailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID của bài tập',
        example: '648a7f2b8f1b3c42acdeabcd',
    }),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExerciseDetailDto.prototype, "exerciseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Số lần lặp lại (Reps)',
        example: 12,
        minimum: 1,
        maximum: 50,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(50),
    __metadata("design:type", Number)
], ExerciseDetailDto.prototype, "reps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Số set',
        example: 4,
        minimum: 1,
        maximum: 10,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(10),
    __metadata("design:type", Number)
], ExerciseDetailDto.prototype, "sets", void 0);
class ScheduleDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tiêu đề của ngày tập',
        example: 'Leg Day',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ScheduleDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ngày trong tuần (1-7)',
        example: 1,
        minimum: 1,
        maximum: 7,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(7),
    __metadata("design:type", Number)
], ScheduleDto.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Danh sách bài tập trong ngày',
        type: [ExerciseDetailDto],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExerciseDetailDto),
    __metadata("design:type", Array)
], ScheduleDto.prototype, "exercises", void 0);
class AddEXDto {
}
exports.AddEXDto = AddEXDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Danh sách lịch tập luyện',
        type: [ScheduleDto],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ScheduleDto),
    __metadata("design:type", Array)
], AddEXDto.prototype, "schedules", void 0);
//# sourceMappingURL=add.ex.dto.js.map