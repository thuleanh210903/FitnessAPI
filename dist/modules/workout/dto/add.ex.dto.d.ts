declare class ExerciseDetailDto {
    exerciseId: string;
    reps: number;
    sets: number;
}
declare class ScheduleDto {
    title: string;
    day: number;
    exercises: ExerciseDetailDto[];
}
export declare class AddEXDto {
    schedules: ScheduleDto[];
}
export {};
