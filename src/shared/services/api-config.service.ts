import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

@Injectable()
export class ApiConfigService {
  adminInfo: any;
  constructor(private configService: ConfigService) {}

  get postgresConfig(): TypeOrmModuleOptions {
    const entities = [join(process.cwd(), 'dist/**/*.entity.js')];

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

  get mongoDbUri(): string {
    const host = this.getString('MONGODB_CLUSTER');
    const dbName = this.getString('MONGODB_DB_NAME');
    const user = this.getString('MONGODB_USER');
    const pass = this.getString('MONGODB_PASSWORD');

    return `mongodb+srv://${user}:${pass}@${host}/${dbName}`;
  }
  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  get isTest(): boolean {
    return this.nodeEnv === 'test';
  }

  getNumber(key: string): number {
    const value = this.configService.get<string>(key);
    const numberValue = Number(value);

    if (isNaN(numberValue)) {
      throw new Error(`${key} environment variable is not a number`);
    }

    return numberValue;
  }

  getBoolean(key: string): boolean {
    const value = this.configService.get<string>(key);

    if (value === undefined) {
      throw new Error(`${key} environment variable is not defined`);
    }

    try {
      return Boolean(JSON.parse(value));
    } catch {
      throw new Error(`${key} environment variable is not a boolean`);
    }
  }

  getString(key: string): string {
    const value = this.configService.get<string>(key);

    if (value === undefined) {
      throw new Error(`${key} environment variable is not defined`);
    }

    return value.replace(/\\n/g, '\n');
  }

  get nodeEnv(): string {
    return this.getString('NODE_ENV');
  }

  get fallbackLanguage(): string {
    return this.getString('FALLBACK_LANGUAGE');
  }

  get serverConfig() {
    return {
      port: this.configService.get<number>('PORT') || 4000,
    };
  }

  get accountSwaggerConfig() {
    return {
      name: this.getString('SWAGGER_ACCOUNT_NAME'),
      pass: this.getString('SWAGGER_ACCOUNT_PASS'),
    };
  }

  get documentationEnabled(): boolean {
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
}
