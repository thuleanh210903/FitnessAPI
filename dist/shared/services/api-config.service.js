"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConfigService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
let ApiConfigService = class ApiConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    get postgresConfig() {
        const entities = [(0, path_1.join)(process.cwd(), 'dist/**/*.entity.js')];
        return {
            entities,
            keepConnectionAlive: !this.isTest,
            dropSchema: this.isTest,
            type: 'postgres',
            name: 'default',
            host: this.getString('DB_HOST'),
            port: this.getNumber('DB_PORT'),
            username: this.getString('DB_USERNAME'),
            password: this.getString('DB_PASSWORD'),
            database: this.getString('DB_DATABASE'),
            synchronize: this.isDevelopment ? true : false,
            migrationsRun: true,
            migrations: [`${__dirname}/db/migrations/*{.ts,.js}`],
            migrationsTableName: 'migrations',
            ssl: this.getBoolean('DB_SSL'),
            logging: this.getBoolean('ENABLE_ORM_LOGS'),
            autoLoadEntities: true,
        };
    }
    get mongoDbUri() {
        const host = this.getString('MONGODB_CLUSTER');
        const dbName = this.getString('MONGODB_DB_NAME');
        const user = this.getString('MONGODB_USER');
        const pass = this.getString('MONGODB_PASSWORD');
        return `mongodb+srv://${user}:${pass}@${host}/${dbName}`;
    }
    get isDevelopment() {
        return this.nodeEnv === 'development';
    }
    get isProduction() {
        return this.nodeEnv === 'production';
    }
    get isTest() {
        return this.nodeEnv === 'test';
    }
    getNumber(key) {
        const value = this.configService.get(key);
        const numberValue = Number(value);
        if (isNaN(numberValue)) {
            throw new Error(`${key} environment variable is not a number`);
        }
        return numberValue;
    }
    getBoolean(key) {
        const value = this.configService.get(key);
        if (value === undefined) {
            throw new Error(`${key} environment variable is not defined`);
        }
        try {
            return Boolean(JSON.parse(value));
        }
        catch {
            throw new Error(`${key} environment variable is not a boolean`);
        }
    }
    getString(key) {
        const value = this.configService.get(key);
        if (value === undefined) {
            throw new Error(`${key} environment variable is not defined`);
        }
        return value.replace(/\\n/g, '\n');
    }
    get nodeEnv() {
        return this.getString('NODE_ENV');
    }
    get fallbackLanguage() {
        return this.getString('FALLBACK_LANGUAGE');
    }
    get serverConfig() {
        return {
            port: this.configService.get('PORT') || 4000,
        };
    }
    get accountSwaggerConfig() {
        return {
            name: this.getString('SWAGGER_ACCOUNT_NAME'),
            pass: this.getString('SWAGGER_ACCOUNT_PASS'),
        };
    }
    get documentationEnabled() {
        return this.getBoolean('ENABLE_DOCUMENTATION');
    }
    get cloudinaryConfig() {
        return {
            cloudName: this.getString('CLOUDINARY_CLOUD_NAME'),
            apiKey: this.getString('CLOUDINARY_API_KEY'),
            apiSecret: this.getString('CLOUDINARY_API_SECRET'),
            apiUrl: this.getString('CLOUDINARY_API_URL'),
        };
    }
};
exports.ApiConfigService = ApiConfigService;
exports.ApiConfigService = ApiConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ApiConfigService);
//# sourceMappingURL=api-config.service.js.map