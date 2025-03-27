// import { ERRORS_DICTIONARY } from '@/shared/constraints/error-dictionary.constraint';
// import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';

// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(private reflector: Reflector) {}

//   canActivate(context: ExecutionContext): boolean {
//     const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
//       context.getHandler(),
//       context.getClass(),
//     ]);

//     if (!requiredRoles) {
//       return true;
//     }

//     const { user } = context.switchToHttp().getRequest();

//     const hasRole = requiredRoles.some((role) => user.role === role);

//     if (!hasRole) {
//       throw new ForbiddenException(ERRORS_DICTIONARY.AUTHORIZE_ERROR);
//     }

//     return true;
//   }
// }
