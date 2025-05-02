import { CreateWorkoutPlanDto } from './dto/create-workout.dto';
import { WorkoutRepository } from './workout.repository';
import { Types } from 'mongoose';
import { UserService } from '../user/user.service';
import { CloudinaryService } from '@/shared/services/cloudinary.service';
import { ExerciseService } from '../exercise/exercise.service';
import { RegisterWorkoutDTO } from './dto/register-workout.dto';
import { LogWorkoutService } from '../log-workout/log-workout.service';
import { Difficulty } from '@/schema/enums/difficulty.enum';
import { CreatePlanDto } from './dto/create-plan.dto';
import { RecommendPlanDTO } from './dto/rcm-plan.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { UpdateWeeklyScheduleDto } from './dto/update-week.dto';
export declare class WorkoutService {
    private readonly workoutRepository;
    private cloudService;
    private userService;
    private exService;
    private logService;
    private readonly videoUploadPath;
    constructor(workoutRepository: WorkoutRepository, cloudService: CloudinaryService, userService: UserService, exService: ExerciseService, logService: LogWorkoutService);
    create(createWorkoutDto: CreateWorkoutPlanDto): Promise<import("../../schema/workplan.schema").WorkoutPlan>;
    getWorkoutPlanById(id: string): Promise<import("../../schema/workplan.schema").WorkoutPlan>;
    private paginate;
    findAll(limit?: number, page?: number): Promise<{
        totalPages: number;
        currentPage: number;
        limit: number;
        data: import("../../schema/workplan.schema").WorkoutPlan[];
    }>;
    findByGoal(goalId: string, limit?: number, offset?: number): Promise<{
        totalPages: number;
        currentPage: number;
        limit: number;
        data: import("../../schema/workplan.schema").WorkoutPlan[];
    }>;
    findOne(id: string): Promise<import("../../schema/workplan.schema").WorkoutPlan>;
    remove(id: number): string;
    findWorkOutByGoal(goal: string): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/workplan.schema").WorkoutPlan> & import("../../schema/workplan.schema").WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    rcmPlan(dto: RecommendPlanDTO): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/workplan.schema").WorkoutPlan> & import("../../schema/workplan.schema").WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findByQuery(goal?: string, difficulty?: Difficulty): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/workplan.schema").WorkoutPlan> & import("../../schema/workplan.schema").WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    registerPlan(dto: RegisterWorkoutDTO, userId: string): Promise<import("mongoose").Document<unknown, {}, import("../../schema/workout-log.schema").WorkoutLog> & import("../../schema/workout-log.schema").WorkoutLog & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    saveVideoToServer(videoFile: Express.Multer.File): Promise<string>;
    createByTrainer(dto: CreatePlanDto, pathThumb: string): Promise<import("mongoose").Document<unknown, {}, import("../../schema/workplan.schema").WorkoutPlan> & import("../../schema/workplan.schema").WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    addExToPlan(id: string, arr: any[]): Promise<import("../../schema/workplan.schema").WorkoutPlan>;
    updateInformationPlan(id: string, dto: UpdateWorkoutDto, image?: string): Promise<import("mongoose").Document<unknown, {}, import("../../schema/workplan.schema").WorkoutPlan> & import("../../schema/workplan.schema").WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateWeeklySchedule(id: string, dto: UpdateWeeklyScheduleDto): Promise<import("mongoose").Document<unknown, {}, import("../../schema/workplan.schema").WorkoutPlan> & import("../../schema/workplan.schema").WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getWorkoutRegistedByUser(userId: Types.ObjectId): Promise<Omit<import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, never>>;
}
