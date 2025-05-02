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
exports.UpdateExerciseCompleteDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateExerciseCompleteDTO {
}
exports.UpdateExerciseCompleteDTO = UpdateExerciseCompleteDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the workout log to update',
        example: '6734642d0d1f33a28c22f2f9',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExerciseCompleteDTO.prototype, "workoutLogId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Day number in the workout plan',
        example: 1,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateExerciseCompleteDTO.prototype, "dayNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Index of the exercise in the day's exercise list",
        example: 0,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateExerciseCompleteDTO.prototype, "exerciseIndex", void 0);
//# sourceMappingURL=update-ex-log.dto.js.map