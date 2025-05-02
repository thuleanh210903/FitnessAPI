import { BaseSchema } from './base/base.schema';
import { HydratedDocument } from 'mongoose';
export type GoalDocument = HydratedDocument<Goal>;
export declare class Goal extends BaseSchema {
    title: string;
    image: string;
}
export declare const GoalSchema: import("mongoose").Schema<Goal, import("mongoose").Model<Goal, any, any, any, import("mongoose").Document<unknown, any, Goal> & Goal & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Goal, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Goal>> & import("mongoose").FlatRecord<Goal> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
