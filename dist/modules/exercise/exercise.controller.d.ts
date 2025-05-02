import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { PaginationQueryDTO } from '@/shared/utils/paginationQuery.dto';
export declare class ExerciseController {
    private readonly exerciseService;
    constructor(exerciseService: ExerciseService);
    create(user: any, createExerciseDto: CreateExerciseDto, obj: {
        file?: Express.Multer.File[];
        thumbnail?: Express.Multer.File[];
    }): Promise<import("../../schema/exercise.schema").Exercise>;
    findAll(paginationQuery: PaginationQueryDTO): Promise<{
        totalPages: number;
        currentPage: number;
        limit: number;
        data: import("../../schema/exercise.schema").Exercise[];
    }>;
    findByCategory(paginationQuery: PaginationQueryDTO, categoryId: string): Promise<{
        totalPages: number;
        currentPage: number;
        limit: number;
        data: import("../../schema/exercise.schema").Exercise[];
    }>;
    findOne(id: string): Promise<import("../../schema/exercise.schema").Exercise>;
    update(id: string, updateExerciseDto: UpdateExerciseDto, user: any, file?: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../../schema/exercise.schema").Exercise> & import("../../schema/exercise.schema").Exercise & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): string;
}
