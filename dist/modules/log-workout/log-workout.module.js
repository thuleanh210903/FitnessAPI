"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogWorkoutModule = void 0;
const common_1 = require("@nestjs/common");
const log_workout_service_1 = require("./log-workout.service");
const log_workout_controller_1 = require("./log-workout.controller");
const mongoose_1 = require("@nestjs/mongoose");
const workout_log_schema_1 = require("../../schema/workout-log.schema");
const user_module_1 = require("../user/user.module");
const jwt_1 = require("@nestjs/jwt");
const workout_module_1 = require("../workout/workout.module");
let LogWorkoutModule = class LogWorkoutModule {
};
exports.LogWorkoutModule = LogWorkoutModule;
exports.LogWorkoutModule = LogWorkoutModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: workout_log_schema_1.WorkoutLog.name, schema: workout_log_schema_1.WorkoutLogSchema }]),
            user_module_1.UserModule,
            (0, common_1.forwardRef)(() => workout_module_1.WorkoutModule),
        ],
        controllers: [log_workout_controller_1.LogWorkoutController],
        providers: [log_workout_service_1.LogWorkoutService, jwt_1.JwtService,],
        exports: [log_workout_service_1.LogWorkoutService],
    })
], LogWorkoutModule);
//# sourceMappingURL=log-workout.module.js.map