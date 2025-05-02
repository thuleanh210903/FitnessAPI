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
exports.WorkoutRepository = void 0;
const workplan_schema_1 = require("../../schema/workplan.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let WorkoutRepository = class WorkoutRepository {
    constructor(workOutModel) {
        this.workOutModel = workOutModel;
    }
    async createWorkoutPlan(createWorkoutPlanDto) {
        const workoutPlan = new this.workOutModel(createWorkoutPlanDto);
        return workoutPlan.save();
    }
    async findById(id) {
        return this.workOutModel
            .findById(id)
            .populate({
            path: 'weeklySchedule.exercises.exerciseId',
            model: 'Exercise',
            select: 'name gifUrl',
        })
            .exec();
    }
    async findAll() {
        return this.workOutModel
            .find()
            .select({
            title: true,
            image: true,
            difficulty: true,
        })
            .sort({
            created_at: 1,
        })
            .limit(5)
            .exec();
    }
    async findByIdWithDetails(id) {
        return this.workOutModel
            .findById(id)
            .populate('trainerId', 'name specialties')
            .populate({
            path: 'weeklySchedule.exercises.exerciseId',
            select: 'name type equipment gifUrl',
        })
            .populate('category', 'name description')
            .exec();
    }
    async findByGoal(goal) {
        const id = new mongoose_2.Types.ObjectId(goal);
        return this.workOutModel
            .find({
            goal: id,
        })
            .select({
            difficulty: true,
            image: true,
            title: true,
            description: true,
        });
    }
    async findByQuery(obj) {
        return await this.workOutModel
            .find(obj)
            .select({
            title: true,
            image: true,
            difficulty: true,
        })
            .exec();
    }
    async create(dto) {
        const workoutPlan = new this.workOutModel(dto);
        return workoutPlan.save();
    }
    async updatePlan(filter, update, option) {
        return await this.workOutModel.findOneAndUpdate(filter, update, option);
    }
    async findAllPaginated(query, limit, offset) {
        return this.workOutModel
            .find(query)
            .populate('goal')
            .select(['-weeklySchedule', '-userIds'])
            .skip(offset)
            .limit(limit)
            .exec();
    }
    async countDocuments(query) {
        return this.workOutModel.countDocuments(query);
    }
};
exports.WorkoutRepository = WorkoutRepository;
exports.WorkoutRepository = WorkoutRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(workplan_schema_1.WorkoutPlan.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], WorkoutRepository);
//# sourceMappingURL=workout.repository.js.map