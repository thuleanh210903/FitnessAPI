"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const setup_swagger_1 = require("./shared/configs/setup-swagger");
const error_dictionary_constraint_1 = require("./shared/constraints/error-dictionary.constraint");
const api_config_service_1 = require("./shared/services/api-config.service");
const shared_module_1 = require("./shared/shared.module");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.select(shared_module_1.SharedModule).get(api_config_service_1.ApiConfigService);
    const port = configService.serverConfig.port;
    if (configService.documentationEnabled) {
        (0, setup_swagger_1.configSwagger)(app);
    }
    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        exceptionFactory: (errors) => new common_1.BadRequestException({
            message: error_dictionary_constraint_1.ERRORS_DICTIONARY.VALIDATION_ERROR,
            details: errors.map((error) => Object.values(error.constraints)).flat(),
        }),
    }));
    app.useGlobalFilters();
    await app.listen(port);
    logger.log(`🚀 Server running on: http://localhost:${port}/api-docs`);
}
bootstrap().catch((error) => {
    const logger = new common_1.Logger('Bootstrap');
    logger.error('Failed to bootstrap the application', error);
});
//# sourceMappingURL=main.js.map