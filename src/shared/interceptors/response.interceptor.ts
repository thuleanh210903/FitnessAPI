import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const skip = this.reflector.get<boolean>('skipGlobalInterceptor', context.getHandler());

    const response = context.switchToHttp().getResponse();

    const statusCode = response.statusCode;

    if (skip) return next.handle();

    return next.handle().pipe(
      map((data) => ({
        statusCode: statusCode,
        data: data?.data ? data.data : data,
        message: data?.message ? data.message : 'success',
        meta: data?.meta || undefined,
        success: true,
      })),
    );
  }
}
