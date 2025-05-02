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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseController = void 0;
const common_1 = require("@nestjs/common");
const exercise_service_1 = require("./exercise.service");
const create_exercise_dto_1 = require("./dto/create-exercise.dto");
const update_exercise_dto_1 = require("./dto/update-exercise.dto");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../shared/guards/jwt-auth.guard");
const user_decorator_1 = require("../../shared/decorators/user.decorator");
const paginationQuery_dto_1 = require("../../shared/utils/paginationQuery.dto");
let ExerciseController = class ExerciseController {
    constructor(exerciseService) {
        this.exerciseService = exerciseService;
    }
    async create(user, createExerciseDto, obj) {
        const pathFile = await this.exerciseService.saveVideoToServer(obj.file[0]);
        createExerciseDto.createdBy = user._id;
        return await this.exerciseService.create(createExerciseDto, pathFile);
    }
    async findAll(paginationQuery) {
        return await this.exerciseService.findAll(paginationQuery.limit, paginationQuery.page);
    }
    async findByCategory(paginationQuery, categoryId) {
        console.log(categoryId);
        return await this.exerciseService.findByCategory(categoryId, paginationQuery.limit, paginationQuery.page);
    }
    async findOne(id) {
        return await this.exerciseService.findOne(id);
    }
    async update(id, updateExerciseDto, user, file) {
        updateExerciseDto.createdBy = user._id;
        if (file) {
            const path = await this.exerciseService.saveVideoToServer(file);
            return await this.exerciseService.update(id, updateExerciseDto, path);
        }
        return await this.exerciseService.update(id, updateExerciseDto);
    }
    remove(id) {
        return this.exerciseService.remove(+id);
    }
};
exports.ExerciseController = ExerciseController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create ex' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'file', maxCount: 1 },
        { name: 'thumbnail', maxCount: 1 },
    ])),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_exercise_dto_1.CreateExerciseDto, Object]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all ex' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginationQuery_dto_1.PaginationQueryDTO]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'find by category' }),
    (0, common_1.Get)('/category/:categoryId/'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginationQuery_dto_1.PaginationQueryDTO, String]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "findByCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'detail ex' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update ex' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_exercise_dto_1.UpdateExerciseDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "remove", null);
exports.ExerciseController = ExerciseController = __decorate([
    (0, swagger_1.ApiTags)('exercise'),
    (0, swagger_1.ApiBearerAuth)('jwt'),
    (0, common_1.Controller)('exercise'),
    __metadata("design:paramtypes", [exercise_service_1.ExerciseService])
], ExerciseController);
//# sourceMappingURL=exercise.controller.js.map