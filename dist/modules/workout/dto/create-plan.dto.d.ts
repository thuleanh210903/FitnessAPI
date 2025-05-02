import { Difficulty } from '@/schema/enums/difficulty.enum';
import { BMI } from '@/schema/enums/bmi.enum';
export declare class CreatePlanDto {
    title: string;
    image: string;
    difficulty: Difficulty;
    description: string;
    daysPerWeek: number;
    isUser: boolean;
    bmi: BMI;
    goal?: any;
    userId?: string;
    totalDayOfPlan: number;
}
