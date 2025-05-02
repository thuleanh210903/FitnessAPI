import { MailerService } from '@nestjs-modules/mailer';
import * as Mail from 'nodemailer/lib/mailer';
export declare class EmailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendMail(options: Mail.Options): Promise<SentMessageInfo>;
}
