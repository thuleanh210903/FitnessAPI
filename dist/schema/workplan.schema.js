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
exports.WorkoutPlanSchema = exports.WorkoutPlan = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const base_schema_1 = require("./base/base.schema");
const difficulty_enum_1 = require("./enums/difficulty.enum");
const bmi_enum_1 = require("./enums/bmi.enum");
let ExerciseDetail = class ExerciseDetail {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Exercise', default: null }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ExerciseDetail.prototype, "exerciseId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], ExerciseDetail.prototype, "reps", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], ExerciseDetail.prototype, "sets", void 0);
ExerciseDetail = __decorate([
    (0, mongoose_1.Schema)()
], ExerciseDetail);
let Schedule = class Schedule {
};
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Schedule.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], Schedule.prototype, "day", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [] }),
    __metadata("design:type", Array)
], Schedule.prototype, "exercises", void 0);
Schedule = __decorate([
    (0, mongoose_1.Schema)()
], Schedule);
let WorkoutPlan = class WorkoutPlan extends base_schema_1.BaseSchema {
};
exports.WorkoutPlan = WorkoutPlan;
__decorate([
    (0, mongoose_1.Prop)({ default: 'Default Title' }),
    __metadata("design:type", String)
], WorkoutPlan.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: `${process.env.DEFAULT_THUMB_PLAN}` }),
    __metadata("design:type", String)
], WorkoutPlan.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', default: null }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], WorkoutPlan.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: difficulty_enum_1.Difficulty, default: difficulty_enum_1.Difficulty.NONE }),
    __metadata("design:type", String)
], WorkoutPlan.prototype, "difficulty", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 3 }),
    __metadata("design:type", Number)
], WorkoutPlan.prototype, "daysPerWeek", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Schedule], default: [] }),
    __metadata("design:type", Array)
], WorkoutPlan.prototype, "weeklySchedule", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.Types.ObjectId, ref: 'User', default: [] }]),
    __metadata("design:type", Array)
], WorkoutPlan.prototype, "userIds", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Goal', default: null }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], WorkoutPlan.prototype, "goal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: bmi_enum_1.BMI, default: bmi_enum_1.BMI.TooFat }),
    __metadata("design:type", Number)
], WorkoutPlan.prototype, "bmi", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'No description provided' }),
    __metadata("design:type", String)
], WorkoutPlan.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], WorkoutPlan.prototype, "isUser", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 1 }),
    __metadata("design:type", Number)
], WorkoutPlan.prototype, "cycle", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 30 }),
    __metadata("design:type", Number)
], WorkoutPlan.prototype, "totalDayOfPlan", void 0);
exports.WorkoutPlan = WorkoutPlan = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    })
], WorkoutPlan);
exports.WorkoutPlanSchema = mongoose_1.SchemaFactory.createForClass(WorkoutPlan);
//# sourceMappingURL=workplan.schema.js.map