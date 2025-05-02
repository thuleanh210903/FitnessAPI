import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare class ApiConfigService {
    private configService;
    adminInfo: any;
    constructor(configService: ConfigService);
    get postgresConfig(): TypeOrmModuleOptions;
    get mongoDbUri(): string;
    get isDevelopment(): boolean;
    get isProduction(): boolean;
    get isTest(): boolean;
    getNumber(key: string): number;
    getBoolean(key: string): boolean;
    getString(key: string): string;
    get nodeEnv(): string;
    get fallbackLanguage(): string;
    get serverConfig(): {
        port: number;
    };
    get accountSwaggerConfig(): {
        name: string;
        pass: string;
    };
    get documentationEnabled(): boolean;
    get cloudinaryConfig(): {
        cloudName: string;
        apiKey: string;
        apiSecret: string;
        apiUrl: string;
    };
}
