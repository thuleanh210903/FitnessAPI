"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const database_module_1 = require("./db/database.module");
const auth_module_1 = require("./modules/auth/auth.module");
const stripe_module_1 = require("./modules/stripe/stripe.module");
const global_exception_1 = require("./shared/exceptions/global.exception");
const logging_middleware_1 = require("./shared/middlewares/logging.middleware");
const response_interceptor_1 = require("./shared/interceptors/response.interceptor");
const shared_module_1 = require("./shared/shared.module");
const user_module_1 = require("./modules/user/user.module");
const goal_module_1 = require("./modules/goal/goal.module");
const exercise_module_1 = require("./modules/exercise/exercise.module");
const workout_module_1 = require("./modules/workout/workout.module");
const category_module_1 = require("./modules/category/category.module");
const log_workout_module_1 = require("./modules/log-workout/log-workout.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logging_middleware_1.LoggingMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: process.env.NODE_ENV === 'development' ? '.env.dev' : '.env',
                cache: true,
                expandVariables: true,
            }),
            stripe_module_1.StripeModule,
            database_module_1.DatabaseModule,
            shared_module_1.SharedModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            goal_module_1.GoalModule,
            exercise_module_1.ExerciseModule,
            workout_module_1.WorkoutModule,
            category_module_1.CategoryModule,
            log_workout_module_1.LogWorkoutModule,
        ],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: global_exception_1.GlobalException,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: response_interceptor_1.ResponseInterceptor,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map