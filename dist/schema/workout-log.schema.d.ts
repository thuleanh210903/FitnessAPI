import { HydratedDocument, Types } from 'mongoose';
import { BaseSchema } from './base/base.schema';
export type WorkoutLogDocument = HydratedDocument<WorkoutLog>;
declare class ExerciseLog {
    exerciseId: Types.ObjectId;
    sets: number;
    reps: number;
    isComplete: boolean;
}
declare class DayLog {
    dayNumber: number;
    dayTitle: string;
    isComplete: boolean;
    exercises: ExerciseLog[];
}
export declare class WorkoutLog extends BaseSchema {
    userId: Types.ObjectId;
    planId: Types.ObjectId;
    days: DayLog[];
}
export declare const WorkoutLogSchema: import("mongoose").Schema<WorkoutLog, import("mongoose").Model<WorkoutLog, any, any, any, import("mongoose").Document<unknown, any, WorkoutLog> & WorkoutLog & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, WorkoutLog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<WorkoutLog>> & import("mongoose").FlatRecord<WorkoutLog> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export {};
