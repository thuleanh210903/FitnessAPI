import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { CloudinaryService } from '@/shared/services/cloudinary.service';
import { ExerciseRepository } from './exercise.repository';
import { UserService } from '../user/user.service';
import { Exercise } from '@/schema/exercise.schema';
export declare class ExerciseService {
    private cloudService;
    private exRepository;
    private userService;
    private readonly videoUploadPath;
    constructor(cloudService: CloudinaryService, exRepository: ExerciseRepository, userService: UserService);
    create(createExerciseDto: CreateExerciseDto, pathFile: string): Promise<Exercise>;
    private paginate;
    findAll(limit?: number, page?: number): Promise<{
        totalPages: number;
        currentPage: number;
        limit: number;
        data: Exercise[];
    }>;
    findByCategory(categoryId: string, limit?: number, offset?: number): Promise<{
        totalPages: number;
        currentPage: number;
        limit: number;
        data: Exercise[];
    }>;
    findOne(id: string): Promise<Exercise>;
    update(id: string, updateExerciseDto: UpdateExerciseDto, pathFile?: string): Promise<import("mongoose").Document<unknown, {}, Exercise> & Exercise & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: number): string;
    saveVideoToServer(videoFile: Express.Multer.File): Promise<string>;
}
