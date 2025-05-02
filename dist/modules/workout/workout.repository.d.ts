import { WorkoutPlan } from '@/schema/workplan.schema';
import { FilterQuery, Model, Types } from 'mongoose';
import { CreateWorkoutPlanDto } from './dto/create-workout.dto';
import { CreatePlanDto } from './dto/create-plan.dto';
export declare class WorkoutRepository {
    private workOutModel;
    constructor(workOutModel: Model<WorkoutPlan>);
    createWorkoutPlan(createWorkoutPlanDto: CreateWorkoutPlanDto): Promise<WorkoutPlan>;
    findById(id: Types.ObjectId): Promise<WorkoutPlan | null>;
    findAll(): Promise<WorkoutPlan[]>;
    findByIdWithDetails(id: Types.ObjectId): Promise<WorkoutPlan>;
    findByGoal(goal: string): Promise<(import("mongoose").Document<unknown, {}, WorkoutPlan> & WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findByQuery(obj: {}): Promise<(import("mongoose").Document<unknown, {}, WorkoutPlan> & WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    create(dto: CreatePlanDto): Promise<import("mongoose").Document<unknown, {}, WorkoutPlan> & WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updatePlan(filter: {}, update: {}, option: {}): Promise<import("mongoose").Document<unknown, {}, WorkoutPlan> & WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAllPaginated(query: any, limit: number, offset: number): Promise<WorkoutPlan[]>;
    countDocuments(query: FilterQuery<WorkoutPlan>): Promise<number>;
}
