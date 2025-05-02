import { BMI } from '@/schema/enums/bmi.enum';
import { Difficulty } from '@/schema/enums/difficulty.enum';
import { Types } from 'mongoose';
export declare class ExerciseDetailDto {
    exerciseId: Types.ObjectId;
    reps: number;
    sets: number;
}
export declare class ScheduleDto {
    title: string;
    day: number;
    exercises: ExerciseDetailDto[];
}
export declare class CreateWorkoutPlanDto {
    title: string;
    image?: string;
    userId?: string;
    difficulty: Difficulty;
    daysPerWeek: number;
    weeklySchedule: ScheduleDto[];
    userIds?: Types.ObjectId[];
    goal?: Types.ObjectId;
    bmi?: BMI;
    description?: string;
    isUser: boolean;
    totalDayOfPlan: number;
}
