export interface Question {
    id: string;
    txt: string;
    ansA: string;
    ansB: string;
    ansC: string;
    ansD: string;
    correctAns: string;
    difficultyLevel: DifficultyLevel;
}

export type QuestionToAdd = Omit<Question, 'id'>;

export enum DifficultyLevel {
    EASY = 'EASY',
    MEDIUM = 'MEDIUM',
    HARD = 'HARD',
}

export interface UsedHelpers {
    half: boolean;
    crowd: boolean;
    phone: boolean;
}
