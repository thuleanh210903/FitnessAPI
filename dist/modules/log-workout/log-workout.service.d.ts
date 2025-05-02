import { UpdateLogWorkoutDto } from './dto/update-log-workout.dto';
import { WorkoutLog } from '@/schema/workout-log.schema';
import { Model, Types } from 'mongoose';
import { WorkoutService } from '../workout/workout.service';
import { GetAllDayDTO } from './dto/get-all-day.dto';
import { DayDetailDTO } from './dto/day-detail.dto';
export declare class LogWorkoutService {
    private logModel;
    private workoutService;
    constructor(logModel: Model<WorkoutLog>, workoutService: WorkoutService);
    create(userId: string, planId: string): Promise<import("mongoose").Document<unknown, {}, WorkoutLog> & WorkoutLog & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): string;
    findOne(dto: GetAllDayDTO, user: Types.ObjectId): Promise<(import("mongoose").Document<unknown, {}, WorkoutLog> & WorkoutLog & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getOne(planId: any, userId: any): Promise<import("mongoose").Document<unknown, {}, WorkoutLog> & WorkoutLog & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: number, updateLogWorkoutDto: UpdateLogWorkoutDto): string;
    remove(id: number): string;
    dayDetail(dto: DayDetailDTO, user: Types.ObjectId): Promise<{
        id: unknown;
        day: {
            dayNumber: number;
            dayTitle: string;
            isComplete: boolean;
            exercises: {
                exerciseId: Types.ObjectId;
                sets: number;
                reps: number;
                isComplete: boolean;
            }[];
        };
    }>;
    updateExerciseComplete(workoutLogId: string, dayNumber: number, exerciseIndex: number): Promise<WorkoutLog>;
    getLogWorkout(userId: Types.ObjectId): Promise<(import("mongoose").Document<unknown, {}, WorkoutLog> & WorkoutLog & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
