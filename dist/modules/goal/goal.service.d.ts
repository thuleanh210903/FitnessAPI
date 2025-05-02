import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { Model } from 'mongoose';
import { Goal } from '@/schema/goal.schema';
import { WorkoutService } from '../workout/workout.service';
import { CloudinaryService } from '@/shared/services/cloudinary.service';
export declare class GoalService {
    private goalModel;
    private workoutService;
    private cloudService;
    private readonly videoUploadPath;
    constructor(goalModel: Model<Goal>, workoutService: WorkoutService, cloudService: CloudinaryService);
    create(createGoalDto: CreateGoalDto, pathFile: string): Promise<import("mongoose").Document<unknown, {}, Goal> & Goal & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Goal> & Goal & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: number): string;
    update(id: string, updateGoalDto: UpdateGoalDto, path?: string): Promise<import("mongoose").Document<unknown, {}, Goal> & Goal & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: number): string;
    findOneGoal(id: string): Promise<import("mongoose").Document<unknown, {}, Goal> & Goal & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findManyById(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/workplan.schema").WorkoutPlan> & import("../../schema/workplan.schema").WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    saveVideoToServer(videoFile: Express.Multer.File): Promise<string>;
}
