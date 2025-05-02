import { HydratedDocument, Types } from 'mongoose';
import { BaseSchema } from './base/base.schema';
import { Role } from './enums/role.enum';
export type UserDocument = HydratedDocument<User>;
declare class Profile {
    age: number;
    gender: string;
    weight: number;
    height: number;
    preferredTrainerId: Types.ObjectId;
    goal: Types.ObjectId;
}
declare class Progress {
    currentWeight: number;
    goalWeight: number;
}
declare class SelectedPlan {
    plan_id: Types.ObjectId;
    isUsing: boolean;
}
export declare class User extends BaseSchema {
    fullName: string;
    email: string;
    password: string;
    profile: Profile;
    progress: Progress;
    role: Role;
    selectedPlans: SelectedPlan[];
    customPlanIds: Types.ObjectId[];
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export {};
