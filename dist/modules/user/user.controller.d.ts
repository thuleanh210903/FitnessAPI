import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserBMIDto } from './dto/update-user-BMI.dto';
import { UpdateGoalDTO } from './dto/update-goal.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    updateBMI(user: any, updateUserDto: UpdateUserBMIDto): Promise<{
        updateUser: import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        bmi: number;
    }>;
    updateGoal(user: any, dto: UpdateGoalDTO): Promise<import("../../schema/user.schema").User>;
    remove(id: string): string;
}
