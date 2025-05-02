import { AuthService } from './auth.service';
import { SignUpEmailDto } from './dto/signUpEmail.dto';
import { LoginEmailDto } from './dto/loginEmail.dto';
import { LoginSocialDto } from './dto/loginSocial.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    hello(user: any): Promise<import("mongoose").Document<unknown, {}, import("../../schema/category.schema").Category> & import("../../schema/category.schema").Category & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    signUpByEmail(dto: SignUpEmailDto): Promise<import("mongoose").Document<unknown, {}, import("../../schema/user.schema").User> & import("../../schema/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    loginByEmail(dto: LoginEmailDto): Promise<{
        accessToken: string;
        email: string;
        role: import("../../schema/enums/role.enum").Role;
    }>;
    loginBySocial(dto: LoginSocialDto): Promise<{
        accessToken: string;
        email: string;
    }>;
    loginWithoutUser(dto: LoginEmailDto): Promise<{
        accessToken: string;
        email: string;
        role: import("../../schema/enums/role.enum").Role;
    }>;
}
