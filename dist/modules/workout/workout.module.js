"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutModule = void 0;
const common_1 = require("@nestjs/common");
const workout_service_1 = require("./workout.service");
const workout_controller_1 = require("./workout.controller");
const mongoose_1 = require("@nestjs/mongoose");
const workplan_schema_1 = require("../../schema/workplan.schema");
const workout_repository_1 = require("./workout.repository");
const jwt_1 = require("@nestjs/jwt");
const user_module_1 = require("../user/user.module");
const cloudinary_service_1 = require("../../shared/services/cloudinary.service");
const exercise_module_1 = require("../exercise/exercise.module");
const log_workout_module_1 = require("../log-workout/log-workout.module");
let WorkoutModule = class WorkoutModule {
};
exports.WorkoutModule = WorkoutModule;
exports.WorkoutModule = WorkoutModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: workplan_schema_1.WorkoutPlan.name, schema: workplan_schema_1.WorkoutPlanSchema }]),
            user_module_1.UserModule,
            exercise_module_1.ExerciseModule,
            (0, common_1.forwardRef)(() => log_workout_module_1.LogWorkoutModule),
        ],
        controllers: [workout_controller_1.WorkoutController],
        providers: [workout_service_1.WorkoutService, workout_repository_1.WorkoutRepository, jwt_1.JwtService, cloudinary_service_1.CloudinaryService],
        exports: [workout_service_1.WorkoutService, workout_repository_1.WorkoutRepository],
    })
], WorkoutModule);
//# sourceMappingURL=workout.module.js.map