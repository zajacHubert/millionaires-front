import { Question } from "../types/question";

export const helpers = (type: string, question: Question) => {
    const answers = [question.ansA, question.ansB, question.ansC, question.ansD];

    switch (type) {
        case 'half':
            const incorrectAnswers = answers.filter(el => el !== question.correctAns);
            const index = Math.floor(Math.random() * 3);
            incorrectAnswers.splice(index, 1);
            return incorrectAnswers;
        // case 'crowd':
        //     const chances = [10, 20, 30, 40];

        //     for (let i = chances.length - 1; i > 0; i--) {
        //         const change = Math.floor(Math.random() * 20 - 10);
        //         chances[i] += change;
        //         chances[i - 1] -= change;
        //     }

        //     const correctAnswerIndex = answers.findIndex(el => el === question.correctAns);
        //     [chances[3], chances[correctAnswerIndex]] = [chances[correctAnswerIndex], chances[3]];
        //     return `Publiczność zagłosowała następująco:
        //     Odpowiedź A: ${chances[0]}%
        //     Odpowiedź B: ${chances[1]}%
        //     Odpowiedź C: ${chances[2]}%
        //     Odpowiedź D: ${chances[3]}%`

        // case 'phone':
        //     console.log('phone');
        //     break;

    }
}