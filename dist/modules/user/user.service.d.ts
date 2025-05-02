import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { UpdateUserBMIDto } from './dto/update-user-BMI.dto';
import { UpdateGoalDTO } from './dto/update-goal.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    create(email: string, password: string): Promise<import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createBySocial(email: string, name: string): Promise<import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOneOrThrowById(id: any): Promise<Omit<import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, never>>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    findOneOrThrowByEmail(email: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, never>>;
    findOneByEmail(email: any): Promise<Omit<import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, never>>;
    updateBMI(dto: UpdateUserBMIDto, id: any): Promise<{
        updateUser: import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        bmi: number;
    }>;
    updateGoal(dto: UpdateGoalDTO, id: any): Promise<import("../../schema/user.schema").User>;
    findOneById(id: any): Promise<Omit<import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, never>>;
}
