import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from '@/schema/category.schema';
import { Model } from 'mongoose';
import { CloudinaryService } from '@/shared/services/cloudinary.service';
import { ExerciseService } from '../exercise/exercise.service';
export declare class CategoryService {
    private cateModel;
    private cloudService;
    private exService;
    private readonly videoUploadPath;
    constructor(cateModel: Model<Category>, cloudService: CloudinaryService, exService: ExerciseService);
    create(createCategoryDto: CreateCategoryDto, file: any): Promise<import("mongoose").Document<unknown, {}, Category> & Category & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findByCategory(categoryId: string): Promise<{
        totalPages: number;
        currentPage: number;
        limit: number;
        data: import("../../schema/exercise.schema").Exercise[];
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Category> & Category & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Category> & Category & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateGoalDto: UpdateCategoryDto, path?: string): Promise<import("mongoose").Document<unknown, {}, Category> & Category & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: number): string;
    saveVideoToServer(videoFile: Express.Multer.File): Promise<string>;
}
