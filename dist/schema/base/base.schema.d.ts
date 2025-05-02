import { Document, Types } from 'mongoose';
export declare abstract class BaseSchema extends Document {
    id: Types.ObjectId;
    deletedAt: Date;
}
