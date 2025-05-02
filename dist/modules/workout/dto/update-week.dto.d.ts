import { Types } from 'mongoose';
export declare class ExerciseDetailDto {
    exerciseId: Types.ObjectId;
    reps?: number;
    sets?: number;
}
export declare class ScheduleDto {
    title: string;
    day: number;
    exercises: ExerciseDetailDto[];
}
export declare class UpdateWeeklyScheduleDto {
    weeklySchedule: ScheduleDto[];
}
