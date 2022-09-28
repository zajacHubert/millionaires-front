import React from 'react';
import { useFetchQuestionsQuery } from '../../features/api-questions-slice';
import { drawQuestions } from '../../utils/drawQuestions';

export const QuestionsList = () => {
    const { data } = useFetchQuestionsQuery();
    const sorted = data?.slice().sort((a, b) => (
        a.difficultyLevel.localeCompare(b.difficultyLevel)
    ))



    return (
        <>
            <h2>Baza pytań</h2>
            <table>
                <thead>
                    <tr>
                        <th>Number pytania</th>
                        <th>Treść pytania</th>
                        <th>Odpowiedź A</th>
                        <th>Odpowiedź B</th>
                        <th>Odpowiedź C</th>
                        <th>Odpowiedź D</th>
                        <th>Poprawna odpowiedź</th>
                        <th>Poziom trudności</th>
                        <th>Działania</th>
                    </tr>
                </thead>
                <tbody>
                    {sorted?.map((el, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{el.txt}</td>
                            <td>{el.ansA}</td>
                            <td>{el.ansB}</td>
                            <td>{el.ansC}</td>
                            <td>{el.ansD}</td>
                            <td>{el.correctAns}</td>
                            <td>{el.difficultyLevel}</td>
                            <td>edytuj usuń</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}