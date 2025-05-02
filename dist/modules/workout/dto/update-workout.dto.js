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
exports.UpdateWorkoutDto = void 0;
const bmi_enum_1 = require("../../../schema/enums/bmi.enum");
const difficulty_enum_1 = require("../../../schema/enums/difficulty.enum");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class UpdateWorkoutDto {
}
exports.UpdateWorkoutDto = UpdateWorkoutDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Updated Title', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateWorkoutDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/new-image.png', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateWorkoutDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: difficulty_enum_1.Difficulty, example: difficulty_enum_1.Difficulty.HARD, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(difficulty_enum_1.Difficulty),
    __metadata("design:type", String)
], UpdateWorkoutDto.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => +value),
    __metadata("design:type", Number)
], UpdateWorkoutDto.prototype, "daysPerWeek", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '6740ab0639b531298a76e84d', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateWorkoutDto.prototype, "goal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: bmi_enum_1.BMI, example: bmi_enum_1.BMI.TooSkinny, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(bmi_enum_1.BMI),
    __metadata("design:type", Number)
], UpdateWorkoutDto.prototype, "bmi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Updated description', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateWorkoutDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateWorkoutDto.prototype, "cycle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 30, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => +value),
    __metadata("design:type", Number)
], UpdateWorkoutDto.prototype, "totalDayOfPlan", void 0);
//# sourceMappingURL=update-workout.dto.js.map