"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configSwagger = configSwagger;
const swagger_1 = require("@nestjs/swagger");
const api_documentation_credentials = {
    name: process.env.SWAGGER_ACCOUNT_NAME,
    pass: process.env.SWAGGER_ACCOUNT_PASS,
};
function configSwagger(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Fitness project')
        .setDescription('## Fitness API description')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description: 'Enter your JWT token',
        in: 'header',
    }, 'jwt')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    const http_adapter = app.getHttpAdapter();
    http_adapter.use('/api-docs', (req, res, next) => {
        function parseAuthHeader(input) {
            const [, encodedPart] = input.split(' ');
            const buff = Buffer.from(encodedPart, 'base64');
            const text = buff.toString('ascii');
            const [name, pass] = text.split(':');
            return { name, pass };
        }
        function unauthorizedResponse() {
            if (http_adapter.getType() === 'fastify') {
                res.statusCode = 401;
                res.setHeader('WWW-Authenticate', 'Basic');
            }
            else {
                res.status(401);
                res.set('WWW-Authenticate', 'Basic');
            }
            next();
        }
        if (!req.headers.authorization) {
            return unauthorizedResponse();
        }
        const credentials = parseAuthHeader(req.headers.authorization);
        if (credentials?.name !== api_documentation_credentials.name ||
            credentials?.pass !== api_documentation_credentials.pass) {
            return unauthorizedResponse();
        }
        next();
    });
    swagger_1.SwaggerModule.setup('api-docs', app, document, {
        swaggerOptions: { persistAuthorization: true },
        customSiteTitle: 'API Exam Documentation',
    });
}
//# sourceMappingURL=setup-swagger.js.map