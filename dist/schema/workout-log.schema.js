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
exports.WorkoutLogSchema = exports.WorkoutLog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const base_schema_1 = require("./base/base.schema");
let ExerciseLog = class ExerciseLog {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Exercise', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ExerciseLog.prototype, "exerciseId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ExerciseLog.prototype, "sets", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ExerciseLog.prototype, "reps", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ExerciseLog.prototype, "isComplete", void 0);
ExerciseLog = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    })
], ExerciseLog);
let DayLog = class DayLog {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], DayLog.prototype, "dayNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], DayLog.prototype, "dayTitle", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], DayLog.prototype, "isComplete", void 0);
__decorate([
    (0, mongoose_1.Prop)([ExerciseLog]),
    __metadata("design:type", Array)
], DayLog.prototype, "exercises", void 0);
DayLog = __decorate([
    (0, mongoose_1.Schema)()
], DayLog);
let WorkoutLog = class WorkoutLog extends base_schema_1.BaseSchema {
};
exports.WorkoutLog = WorkoutLog;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], WorkoutLog.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'WorkoutPlan', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], WorkoutLog.prototype, "planId", void 0);
__decorate([
    (0, mongoose_1.Prop)([DayLog]),
    __metadata("design:type", Array)
], WorkoutLog.prototype, "days", void 0);
exports.WorkoutLog = WorkoutLog = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    })
], WorkoutLog);
exports.WorkoutLogSchema = mongoose_1.SchemaFactory.createForClass(WorkoutLog);
//# sourceMappingURL=workout-log.schema.js.map