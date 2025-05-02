import { ApiConfigService } from '@/shared/services/api-config.service';
export declare class CloudinaryService {
    private readonly configService;
    private readonly cloudName;
    private readonly apiKey;
    private readonly apiSecret;
    private readonly apiUrl;
    constructor(configService: ApiConfigService);
    uploadImage(file: string): Promise<{
        publicId: string;
        url: string;
    }>;
    getImageDetails(publicId: string): Promise<any>;
    deleteImage(publicId: string): Promise<any>;
}
