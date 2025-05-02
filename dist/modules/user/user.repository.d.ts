import { User } from '@/schema/user.schema';
import { Model, Types } from 'mongoose';
export declare class UserRepository {
    private userModel;
    constructor(userModel: Model<User>);
    createByEmail(email: string, password: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createBySocial(email: string, fullName: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findOneUser(conditions: {}): Promise<Omit<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, never>>;
    updateUser(data: {}, userId: any): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateOne(user: User): Promise<User>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    updateManySelectedPlans(userId: Types.ObjectId, update: any, options?: any): Promise<import("mongoose").UpdateWriteOpResult>;
}
