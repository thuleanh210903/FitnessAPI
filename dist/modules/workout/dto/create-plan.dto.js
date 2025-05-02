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
exports.CreatePlanDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const difficulty_enum_1 = require("../../../schema/enums/difficulty.enum");
const bmi_enum_1 = require("../../../schema/enums/bmi.enum");
const swagger_1 = require("@nestjs/swagger");
class CreatePlanDto {
}
exports.CreatePlanDto = CreatePlanDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title',
        example: 'Workout daily',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => value ?? 'Default Title'),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => value ?? process.env.DEFAULT_THUMB_PLAN),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Difficulty',
        example: difficulty_enum_1.Difficulty.BEGINNER,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(difficulty_enum_1.Difficulty),
    (0, class_transformer_1.Transform)(({ value }) => value ?? difficulty_enum_1.Difficulty.NONE),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Desciption of plan',
        example: 'Desciption of plan',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => value ?? 'Default description for the workout plan.'),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Số ngày tập trong một tuần',
        example: 3,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_transformer_1.Transform)(({ value }) => +value),
    __metadata("design:type", Number)
], CreatePlanDto.prototype, "daysPerWeek", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => value ?? false),
    __metadata("design:type", Boolean)
], CreatePlanDto.prototype, "isUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'BMI for plan',
        example: bmi_enum_1.BMI.TooFat,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(bmi_enum_1.BMI),
    (0, class_transformer_1.Transform)(({ value }) => value ?? bmi_enum_1.BMI.TooSkinny),
    __metadata("design:type", Number)
], CreatePlanDto.prototype, "bmi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id of goal plan',
        example: '64c8b2d1e83d8a10fcd4e20c',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePlanDto.prototype, "goal", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Số ngày tập trong một tuần',
        example: 3,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => +value),
    __metadata("design:type", Number)
], CreatePlanDto.prototype, "totalDayOfPlan", void 0);
//# sourceMappingURL=create-plan.dto.js.map