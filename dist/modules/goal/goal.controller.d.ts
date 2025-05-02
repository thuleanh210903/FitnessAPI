import { GoalService } from './goal.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
export declare class GoalController {
    private readonly goalService;
    constructor(goalService: GoalService);
    create(createGoalDto: CreateGoalDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../../schema/goal.schema").Goal> & import("../../schema/goal.schema").Goal & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/goal.schema").Goal> & import("../../schema/goal.schema").Goal & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/workplan.schema").WorkoutPlan> & import("../../schema/workplan.schema").WorkoutPlan & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOneGoal(id: string): Promise<import("mongoose").Document<unknown, {}, import("../../schema/goal.schema").Goal> & import("../../schema/goal.schema").Goal & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateGoalDto: UpdateGoalDto, file?: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../../schema/goal.schema").Goal> & import("../../schema/goal.schema").Goal & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): string;
}
