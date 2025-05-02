import { UserService } from '../../modules/user/user.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
export declare class JwtAuthGuard implements CanActivate {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UserService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
