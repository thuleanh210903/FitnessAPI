"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awsConfig = void 0;
const config_1 = require("@nestjs/config");
exports.awsConfig = {
    useFactory: (configService) => {
        return {
            accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
            secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
            region: configService.get('AWS_REGION'),
        };
    },
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=aws.config.js.map