import { UserService } from '../user/user.service';
import { SignUpEmailDto } from './dto/signUpEmail.dto';
import { LoginEmailDto } from './dto/loginEmail.dto';
import { JwtService } from '@nestjs/jwt';
import { ApiConfigService } from '@/shared/services/api-config.service';
import { LoginSocialDto } from './dto/loginSocial.dto';
import { Goal } from '@/schema/goal.schema';
import { Model } from 'mongoose';
import { Category } from '@/schema/category.schema';
import { Role } from '@/schema/enums/role.enum';
export declare class AuthService {
    private goalModel;
    private cateModel;
    private readonly userService;
    private jwtService;
    private readonly configService;
    constructor(goalModel: Model<Goal>, cateModel: Model<Category>, userService: UserService, jwtService: JwtService, configService: ApiConfigService);
    test(): Promise<import("mongoose").Document<unknown, {}, Category> & Category & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    signUpEmail(signUpEmailDto: SignUpEmailDto): Promise<import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    loginByEmail(dto: LoginEmailDto): Promise<{
        accessToken: string;
        email: string;
        role: Role;
    }>;
    loginWithoutUser(dto: LoginEmailDto): Promise<{
        accessToken: string;
        email: string;
        role: Role.TRAINER | Role.ADMIN;
    }>;
    getAccessToken(userId: any, email: string): string;
    loginSocial(dto: LoginSocialDto): Promise<{
        accessToken: string;
        email: string;
    }>;
}
