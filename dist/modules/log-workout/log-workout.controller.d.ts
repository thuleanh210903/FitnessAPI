import { LogWorkoutService } from './log-workout.service';
import { UpdateLogWorkoutDto } from './dto/update-log-workout.dto';
import { GetAllDayDTO } from './dto/get-all-day.dto';
import { DayDetailDTO } from './dto/day-detail.dto';
import { UpdateExerciseCompleteDTO } from './dto/update-ex-log.dto';
export declare class LogWorkoutController {
    private readonly logWorkoutService;
    constructor(logWorkoutService: LogWorkoutService);
    getLogWorkout(user: any): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/workout-log.schema").WorkoutLog> & import("../../schema/workout-log.schema").WorkoutLog & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(dto: GetAllDayDTO, user: any): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/workout-log.schema").WorkoutLog> & import("../../schema/workout-log.schema").WorkoutLog & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    update(id: string, updateLogWorkoutDto: UpdateLogWorkoutDto): string;
    remove(id: string): string;
    detailDay(dto: DayDetailDTO, user: any): Promise<{
        id: unknown;
        day: {
            dayNumber: number;
            dayTitle: string;
            isComplete: boolean;
            exercises: {
                exerciseId: import("mongoose").Types.ObjectId;
                sets: number;
                reps: number;
                isComplete: boolean;
            }[];
        };
    }>;
    complateEx(dto: UpdateExerciseCompleteDTO, user: any): Promise<import("../../schema/workout-log.schema").WorkoutLog>;
}
