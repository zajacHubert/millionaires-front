import { Question } from "../types/question";

export const drawQuestions = (allQuestions: Question[]) => {

    const easyQuestions = allQuestions.filter(el => el.difficultyLevel === 'EASY');
    const mediumQuestions = allQuestions.filter(el => el.difficultyLevel === 'MEDIUM');
    const hardQuestions = allQuestions.filter(el => el.difficultyLevel === 'HARD');

    const easyPart = [...easyQuestions].sort(() => 0.5 - Math.random()).slice(0, 6);
    const mediumPart = [...mediumQuestions].sort(() => 0.5 - Math.random()).slice(0, 4);
    const hardPart = [...hardQuestions].sort(() => 0.5 - Math.random()).slice(0, 2);

    return [...easyPart, ...mediumPart, ...hardPart];
}