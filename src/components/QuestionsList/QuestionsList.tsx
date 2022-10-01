import React from 'react';
import { useDeleteQuestionMutation, useFetchQuestionsQuery } from '../../features/api-questions-slice';
import { MdDelete } from 'react-icons/md';
import styles from './QuestionList.module.scss';
import { Link } from 'react-router-dom';

export const QuestionsList = () => {
    const { data, isError } = useFetchQuestionsQuery(undefined, { refetchOnMountOrArgChange: true });
    const [deleteQuestion] = useDeleteQuestionMutation();
    const sorted = data?.slice().sort((a, b) => (
        a.difficultyLevel.localeCompare(b.difficultyLevel)
    ));

    const removeQuestion = async (id: string) => {
        await deleteQuestion({ id });
    }

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>Baza pytań</h2>
                <table className={styles.table}>
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
                            <th>Usuń pytanie</th>
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
                                <td><button className={styles.btn} onClick={() => removeQuestion(el.id)}>Usuń <MdDelete /></button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link className={styles.return} to={'/'}>Powrót na stronę główną</Link>
            </div>

        </>
    )
}