import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ValidationError } from 'class-validator';
import { AppModule } from './app.module';
import { configSwagger } from './shared/configs/setup-swagger';
import { ERRORS_DICTIONARY } from './shared/constraints/error-dictionary.constraint';
import { ApiConfigService } from './shared/services/api-config.service';
import { SharedModule } from './shared/shared.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  const configService = app.select(SharedModule).get(ApiConfigService);
  const port = configService.serverConfig.port;

  if (configService.documentationEnabled) {
    configSwagger(app);
  }
  app.enableCors({
    origin: 'http://localhost:3000', // Địa chỉ frontend của bạn
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      exceptionFactory: (errors: ValidationError[]) =>
        new BadRequestException({
          message: ERRORS_DICTIONARY.VALIDATION_ERROR,
          details: errors.map((error) => Object.values(error.constraints)).flat(),
        }),
    }),
  );

  app.useGlobalFilters();

  await app.listen(port);

  logger.log(`🚀 Server running on: http://localhost:${port}/api-docs`);
}

bootstrap().catch((error) => {
  const logger = new Logger('Bootstrap');
  logger.error('Failed to bootstrap the application', error); // Log any errors that occur during bootstrap
});
