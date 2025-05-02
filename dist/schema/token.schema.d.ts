import { Document, HydratedDocument, Types } from 'mongoose';
import { BaseSchema } from './base/base.schema';
export type TokenDocument = HydratedDocument<Token>;
export declare class Token extends BaseSchema {
    userId: Types.ObjectId;
    token: string;
    refreshToken: string;
    deviceInfo: string;
    isRevoked: boolean;
}
export declare const TokenSchema: import("mongoose").Schema<Token, import("mongoose").Model<Token, any, any, any, Document<unknown, any, Token> & Token & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Token, Document<unknown, {}, import("mongoose").FlatRecord<Token>> & import("mongoose").FlatRecord<Token> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
