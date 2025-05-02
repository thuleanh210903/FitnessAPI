import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../../schema/category.schema").Category> & import("../../schema/category.schema").Category & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/category.schema").Category> & import("../../schema/category.schema").Category & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<{
        totalPages: number;
        currentPage: number;
        limit: number;
        data: import("../../schema/exercise.schema").Exercise[];
    }>;
    detailCategory(id: string): Promise<import("mongoose").Document<unknown, {}, import("../../schema/category.schema").Category> & import("../../schema/category.schema").Category & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateGoalDto: UpdateCategoryDto, file?: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../../schema/category.schema").Category> & import("../../schema/category.schema").Category & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): string;
}
