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
exports.RecommendPlanDTO = void 0;
const bmi_enum_1 = require("../../../schema/enums/bmi.enum");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class RecommendPlanDTO {
}
exports.RecommendPlanDTO = RecommendPlanDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'BMI for user',
        example: bmi_enum_1.BMI.TooFat,
        required: true,
    }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsEnum)(bmi_enum_1.BMI),
    __metadata("design:type", Number)
], RecommendPlanDTO.prototype, "bmi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Goal of user',
        example: '67355aef308dac0121bb1b6d',
        required: true,
    }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], RecommendPlanDTO.prototype, "goal", void 0);
//# sourceMappingURL=rcm-plan.dto.js.map