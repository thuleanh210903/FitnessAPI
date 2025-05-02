import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
export declare class StripeService {
    private configService;
    private stripe;
    constructor(configService: ConfigService);
    createCustomer(name: string, email: string): Promise<Stripe.Response<Stripe.Customer>>;
}
