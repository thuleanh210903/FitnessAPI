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
exports.ExerciseRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const exercise_schema_1 = require("../../schema/exercise.schema");
let ExerciseRepository = class ExerciseRepository {
    constructor(exerciseModel) {
        this.exerciseModel = exerciseModel;
    }
    async create(createExerciseDto) {
        const createdExercise = new this.exerciseModel({
            ...createExerciseDto,
            category: new mongoose_2.Types.ObjectId(createExerciseDto.category),
            createdBy: new mongoose_2.Types.ObjectId(createExerciseDto.createdBy),
        });
        return await createdExercise.save();
    }
    async findById(id) {
        const _id = new mongoose_2.Types.ObjectId(id);
        return this.exerciseModel
            .findById({
            _id: _id,
        })
            .populate('category')
            .populate('createdBy')
            .exec();
    }
    async delete(id) {
        return this.exerciseModel.findByIdAndDelete(id).exec();
    }
    async findAllPaginated(query, limit, offset) {
        return this.exerciseModel
            .find(query)
            .populate('category')
            .populate('createdBy')
            .skip(offset)
            .limit(limit)
            .exec();
    }
    async countDocuments(query) {
        return this.exerciseModel.countDocuments(query);
    }
    async updateExercise(filter, update, option) {
        return await this.exerciseModel.findOneAndUpdate(filter, update, option);
    }
};
exports.ExerciseRepository = ExerciseRepository;
exports.ExerciseRepository = ExerciseRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(exercise_schema_1.Exercise.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ExerciseRepository);
//# sourceMappingURL=exercise.repository.js.map