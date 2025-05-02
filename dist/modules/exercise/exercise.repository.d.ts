import { FilterQuery, Model } from 'mongoose';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { Exercise } from '@/schema/exercise.schema';
export declare class ExerciseRepository {
    private exerciseModel;
    constructor(exerciseModel: Model<Exercise>);
    create(createExerciseDto: CreateExerciseDto): Promise<Exercise>;
    findById(id: string): Promise<Exercise>;
    delete(id: string): Promise<Exercise>;
    findAllPaginated(query: any, limit: number, offset: number): Promise<Exercise[]>;
    countDocuments(query: FilterQuery<Exercise>): Promise<number>;
    updateExercise(filter: {}, update: {}, option: {}): Promise<import("mongoose").Document<unknown, {}, Exercise> & Exercise & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
