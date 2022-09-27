import { Question } from "../types/question";

export const drawQuestions = (allQuestions: Question[]) => {
    const easyQuestions = allQuestions.filter(el => el.difficultyLevel === 'EASY');
    const mediumQuestions = allQuestions.filter(el => el.difficultyLevel === 'MEDIUM');
    const hardQuestions = allQuestions.filter(el => el.difficultyLevel === 'HARD');
    const drawedQuestions = [];

    for (let i = 0; i < 5; i++) {
        const index = Math.floor(Math.random() * easyQuestions.length);
        drawedQuestions.push(easyQuestions[index]);
        easyQuestions.splice(index, 1);
    }

    for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * mediumQuestions.length);
        drawedQuestions.push(mediumQuestions[index]);
        easyQuestions.splice(index, 1);
    }

    for (let i = 0; i < 2; i++) {
        const index = Math.floor(Math.random() * hardQuestions.length);
        drawedQuestions.push(hardQuestions[index]);
        easyQuestions.splice(index, 1);
    }

    return drawedQuestions;
}