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
exports.GoalController = void 0;
const common_1 = require("@nestjs/common");
const goal_service_1 = require("./goal.service");
const create_goal_dto_1 = require("./dto/create-goal.dto");
const update_goal_dto_1 = require("./dto/update-goal.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
let GoalController = class GoalController {
    constructor(goalService) {
        this.goalService = goalService;
    }
    async create(createGoalDto, file) {
        const pathFile = await this.goalService.saveVideoToServer(file);
        return await this.goalService.create(createGoalDto, pathFile);
    }
    async findAll() {
        return await this.goalService.findAll();
    }
    async findOne(id) {
        return await this.goalService.findManyById(id);
    }
    async findOneGoal(id) {
        return await this.goalService.findOneGoal(id);
    }
    async update(id, updateGoalDto, file) {
        if (file) {
            const path = await this.goalService.saveVideoToServer(file);
            return await this.goalService.update(id, updateGoalDto, path);
        }
        return await this.goalService.update(id, updateGoalDto);
    }
    remove(id) {
        return this.goalService.remove(+id);
    }
};
exports.GoalController = GoalController;
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_goal_dto_1.CreateGoalDto, Object]),
    __metadata("design:returntype", Promise)
], GoalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoalController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get workplan by goal' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GoalController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get detail goal' }),
    (0, common_1.Get)('/detail/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GoalController.prototype, "findOneGoal", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update goal' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_goal_dto_1.UpdateGoalDto, Object]),
    __metadata("design:returntype", Promise)
], GoalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GoalController.prototype, "remove", null);
exports.GoalController = GoalController = __decorate([
    (0, swagger_1.ApiTags)('goal'),
    (0, common_1.Controller)('goal'),
    __metadata("design:paramtypes", [goal_service_1.GoalService])
], GoalController);
//# sourceMappingURL=goal.controller.js.map