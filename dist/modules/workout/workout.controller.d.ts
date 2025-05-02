import { WorkoutService } from './workout.service';
import { GetDetailWorkOutDTO } from './dto/get-detail.workout-dto';
import { RegisterWorkoutDTO } from './dto/register-workout.dto';
import { QueryWorkoutDTO } from './dto/query-workout.dto';
import { CreatePlanDto } from './dto/create-plan.dto';
import { AddEXDto } from './dto/add.ex.dto';
import { RecommendPlanDTO } from './dto/rcm-plan.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { UpdateWeeklyScheduleDto } from './dto/update-week.dto';
import { PaginationQueryDTO } from '@/shared/utils/paginationQuery.dto';
export declare class WorkoutController {
    private readonly workoutService;
    constructor(workoutService: WorkoutService);
    create(dto: CreatePlanDto, user: any, file?: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../../schema/workplan.schema").WorkoutPlan> & import("../../schema/workplan.schema").WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateInforPlan(id: any, dto: UpdateWorkoutDto, user: any, file?: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../../schema/workplan.schema").WorkoutPlan> & import("../../schema/workplan.schema").WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updatePlanWithEx(id: any, dto: UpdateWeeklyScheduleDto, user: any): Promise<import("mongoose").Document<unknown, {}, import("../../schema/workplan.schema").WorkoutPlan> & import("../../schema/workplan.schema").WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    addExToPlan(id: string, dto: AddEXDto): Promise<import("../../schema/workplan.schema").WorkoutPlan>;
    rcmPlan(dto: RecommendPlanDTO): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/workplan.schema").WorkoutPlan> & import("../../schema/workplan.schema").WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findByQuery(dto: QueryWorkoutDTO): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/workplan.schema").WorkoutPlan> & import("../../schema/workplan.schema").WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getWorkoutRegistedByUser(user: any): Promise<Omit<import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, never>>;
    findAll(paginationQuery: PaginationQueryDTO): Promise<{
        totalPages: number;
        currentPage: number;
        limit: number;
        data: import("../../schema/workplan.schema").WorkoutPlan[];
    }>;
    findByCategory(paginationQuery: PaginationQueryDTO, goalId: string): Promise<{
        totalPages: number;
        currentPage: number;
        limit: number;
        data: import("../../schema/workplan.schema").WorkoutPlan[];
    }>;
    findOne(dto: GetDetailWorkOutDTO): Promise<import("../../schema/workplan.schema").WorkoutPlan>;
    remove(id: string): string;
    registerPlan(dto: RegisterWorkoutDTO, user: any): Promise<import("mongoose").Document<unknown, {}, import("../../schema/workout-log.schema").WorkoutLog> & import("../../schema/workout-log.schema").WorkoutLog & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
