"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseModule = void 0;
const common_1 = require("@nestjs/common");
const exercise_service_1 = require("./exercise.service");
const exercise_controller_1 = require("./exercise.controller");
const mongoose_1 = require("@nestjs/mongoose");
const exercise_schema_1 = require("../../schema/exercise.schema");
const jwt_1 = require("@nestjs/jwt");
const exercise_repository_1 = require("./exercise.repository");
const cloudinary_service_1 = require("../../shared/services/cloudinary.service");
const user_module_1 = require("../user/user.module");
let ExerciseModule = class ExerciseModule {
};
exports.ExerciseModule = ExerciseModule;
exports.ExerciseModule = ExerciseModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: exercise_schema_1.Exercise.name, schema: exercise_schema_1.ExerciseSchema }]), user_module_1.UserModule],
        controllers: [exercise_controller_1.ExerciseController],
        providers: [exercise_service_1.ExerciseService, jwt_1.JwtService, exercise_repository_1.ExerciseRepository, cloudinary_service_1.CloudinaryService],
        exports: [exercise_service_1.ExerciseService, exercise_repository_1.ExerciseRepository],
    })
], ExerciseModule);
//# sourceMappingURL=exercise.module.js.map