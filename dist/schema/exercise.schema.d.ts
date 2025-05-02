import { HydratedDocument, Types } from 'mongoose';
import { BaseSchema } from './base/base.schema';
export type ExerciseDocument = HydratedDocument<Exercise>;
export declare class Exercise extends BaseSchema {
    name: string;
    gifUrl: string;
    thumbnail: string;
    steps: string;
    category: Types.ObjectId;
    createdBy: Types.ObjectId;
    isPublic: boolean;
}
export declare const ExerciseSchema: import("mongoose").Schema<Exercise, import("mongoose").Model<Exercise, any, any, any, import("mongoose").Document<unknown, any, Exercise> & Exercise & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Exercise, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Exercise>> & import("mongoose").FlatRecord<Exercise> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
