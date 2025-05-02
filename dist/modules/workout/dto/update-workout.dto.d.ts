import { BMI } from '@/schema/enums/bmi.enum';
import { Difficulty } from '@/schema/enums/difficulty.enum';
export declare class UpdateWorkoutDto {
    title?: string;
    image?: string;
    difficulty?: Difficulty;
    daysPerWeek?: number;
    goal?: string;
    bmi?: BMI;
    description?: string;
    cycle?: number;
    totalDayOfPlan?: number;
}
