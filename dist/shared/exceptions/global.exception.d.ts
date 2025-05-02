import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class GlobalException implements ExceptionFilter {
    private readonly config_service;
    constructor(config_service: ConfigService);
    catch(exception: any, host: ArgumentsHost): void;
}
