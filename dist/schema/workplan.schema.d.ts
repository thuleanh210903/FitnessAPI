import { HydratedDocument, Types } from 'mongoose';
import { BaseSchema } from './base/base.schema';
import { Difficulty } from './enums/difficulty.enum';
import { BMI } from './enums/bmi.enum';
export type WorkoutPlanDocument = HydratedDocument<WorkoutPlan>;
declare class ExerciseDetail {
    exerciseId: Types.ObjectId;
    reps: number;
    sets: number;
}
declare class Schedule {
    title: string;
    day: number;
    exercises: ExerciseDetail[];
}
export declare class WorkoutPlan extends BaseSchema {
    title: string;
    image: string;
    userId: Types.ObjectId;
    difficulty: Difficulty;
    daysPerWeek: number;
    weeklySchedule: Schedule[];
    userIds: Types.ObjectId[];
    goal: Types.ObjectId;
    bmi: BMI;
    description: string;
    isUser: boolean;
    cycle: number;
    totalDayOfPlan: number;
}
export declare const WorkoutPlanSchema: import("mongoose").Schema<WorkoutPlan, import("mongoose").Model<WorkoutPlan, any, any, any, import("mongoose").Document<unknown, any, WorkoutPlan> & WorkoutPlan & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, WorkoutPlan, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<WorkoutPlan>> & import("mongoose").FlatRecord<WorkoutPlan> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export {};
