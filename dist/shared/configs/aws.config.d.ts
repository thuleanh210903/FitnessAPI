import { ConfigService } from '@nestjs/config';
export declare const awsConfig: {
    useFactory: (configService: ConfigService) => {
        accessKeyId: any;
        secretAccessKey: any;
        region: any;
    };
    inject: (typeof ConfigService)[];
};
