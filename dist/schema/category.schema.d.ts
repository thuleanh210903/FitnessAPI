import { HydratedDocument } from 'mongoose';
import { BaseSchema } from './base/base.schema';
export type CategoryDocument = HydratedDocument<Category>;
export declare class Category extends BaseSchema {
    name: string;
    image: string;
}
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, import("mongoose").Document<unknown, any, Category> & Category & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Category>> & import("mongoose").FlatRecord<Category> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
