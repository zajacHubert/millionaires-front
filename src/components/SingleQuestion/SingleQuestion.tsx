import React, { useEffect, useState } from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import { Navigate } from 'react-router-dom';
import { Question, UsedHelpers } from '../../types/question';
import { getAllQuestions } from '../../utils/axios-functions';
import { drawQuestions } from '../../utils/drawQuestions';
import { winnings } from '../../utils/winnings';
import { Modal } from '../Modal/Modal';
import styles from './SingleQuestion.module.scss';
import { helpers } from '../../utils/helpers';

export const SingleQuestion = () => {
    const [drawed, setDrawed] = useState<Question[] | null>(null);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [rejected, setRejected] = useState<string[]>([]);
    const [isHelper, setIsHelper] = useState(false);
    const [usedHelpers, setUsedHelpers] = useState<UsedHelpers>({
        half: false,
        crowd: false,
        phone: false,
    })

    useEffect(() => {
        (async () => {
            const res = await getAllQuestions();
            const drawedQuestions = drawQuestions(res.data);
            setDrawed(drawedQuestions);
        })()
    }, []);

    if (!drawed) {
        return <p>Loading</p>
    }

    const checkAnswer = (answer: string) => {
        setIsHelper(false);
        if (drawed[questionIndex].correctAns === answer) {
            if (questionIndex < 11) {
                setMessage('Poprawna odpowiedź!');
                setShow(true);
                setQuestionIndex(prev => prev + 1)
            } else {
                setMessage('Gratulacje! Opowiedziałeś poprawnie na wszystkie pytania i wygrałeś nagrodę główną 1000000!');
                setShow(true);
            }
        } else {

            if (questionIndex < 1) {
                setMessage('Niestety niepoprawna odpowiedź, nie udało się nic wygrać');
                setShow(true);
            }
            else if (questionIndex < 7) {
                setMessage('Niestety niepoprawna odpowiedź, wygrywasz sumę gwarantowaną 1000zł');
                setShow(true);
            }
            else if (questionIndex < 11) {
                setMessage('Niestety niepoprawna odpowiedź, wygrywasz sumę gwarantowaną 40000zł');
                setShow(true);
            }
        }
    }

    const resignation = () => {
        setIsHelper(false);

        if (questionIndex === 0) {
            setMessage(`Kończysz grę, niestety nie udało się nic wygrać`);
            setShow(true);
        } else {
            setMessage(`Kończysz grę z wygraną ${winnings[questionIndex - 1]} zł`);
            setShow(true);
        }
    }

    const handleHelper = (type: string) => {
        setIsHelper(true);
        if (type === 'half') {
            setUsedHelpers(prev => ({
                ...prev,
                half: true,
            }));
            const answersToRemove = helpers(type, drawed[questionIndex]);
            setMessage('Odrzucono dwie błędne odpowiedzi');
            setShow(true);
            if (typeof answersToRemove === 'object') {
                setRejected(answersToRemove);
            }
            // setRejected(answersToRemove);
            console.log(answersToRemove);
        }
        if (type === 'crowd') {
            setUsedHelpers(prev => ({
                ...prev,
                crowd: true,
            }));
            const messageToSet = helpers(type, drawed[questionIndex]);
            setMessage('Odrzucono dwie błędne odpowiedzi');
            setShow(true);

        }

    }

    return (
        <>
            {
                show
                &&
                <Modal
                    setShow={setShow}
                    setRedirect={setRedirect}
                    message={message}
                    questionIndex={questionIndex}
                    isHelper={isHelper}

                />
            }
            {redirect && <Navigate to="/" replace />}
            <div className={styles.container}>
                <div className={styles.questions}>
                    <h3 className={styles.question}>{drawed[questionIndex].txt}</h3>
                    <div className={styles.answers}>
                        <button
                            onClick={() => checkAnswer(drawed[questionIndex].ansA)}
                            className={styles.answer}
                            disabled={rejected.includes(drawed[questionIndex].ansA)}
                            style={{
                                opacity: rejected.includes(drawed[questionIndex].ansA) ? 0 : '',
                                cursor: rejected.includes(drawed[questionIndex].ansA) ? 'default' : '',
                            }}

                        >
                            A: {drawed[questionIndex].ansA}
                        </button>
                        <button
                            onClick={() => checkAnswer(drawed[questionIndex].ansB)}
                            className={styles.answer}
                            disabled={rejected.includes(drawed[questionIndex].ansB)}
                            style={{
                                opacity: rejected.includes(drawed[questionIndex].ansB) ? 0 : '',
                                cursor: rejected.includes(drawed[questionIndex].ansB) ? 'default' : '',
                            }}

                        >
                            B: {drawed[questionIndex].ansB}
                        </button>
                        <button
                            onClick={() => checkAnswer(drawed[questionIndex].ansC)}
                            className={styles.answer}
                            disabled={rejected.includes(drawed[questionIndex].ansC)}
                            style={{
                                opacity: rejected.includes(drawed[questionIndex].ansC) ? 0 : '',
                                cursor: rejected.includes(drawed[questionIndex].ansC) ? 'default' : '',
                            }}

                        >
                            C: {drawed[questionIndex].ansC}
                        </button>
                        <button
                            onClick={() => checkAnswer(drawed[questionIndex].ansD)}
                            className={styles.answer}
                            disabled={rejected.includes(drawed[questionIndex].ansD)}
                            style={{
                                opacity: rejected.includes(drawed[questionIndex].ansD) ? 0 : '',
                                cursor: rejected.includes(drawed[questionIndex].ansD) ? 'default' : '',
                            }}

                        >
                            D: {drawed[questionIndex].ansD}
                        </button>
                    </div>
                </div>
                <div className={styles.options}>
                    <div>
                        <button onClick={resignation} className={styles.resignation}>Rezygnuję</button>
                        <div className={styles.helpers}>
                            <BsFillPeopleFill
                                onClick={() => handleHelper('crowd')}
                                className={`${styles.crowd} ${usedHelpers.crowd ? styles.disabled : ''}`} />

                            <button
                                onClick={() => handleHelper('half')}
                                className={`${styles.half} ${usedHelpers.half ? styles.disabled : ''}`}
                                disabled={usedHelpers.half}
                            >
                                50:50
                            </button>
                            <AiFillPhone onClick={() => handleHelper('phone')} className={styles.phone} />
                        </div>

                    </div>
                    <div className={styles.winnings}>
                        <ul >
                            {[...winnings].reverse().map((el, i) => (
                                <li key={i} style={{ color: `${questionIndex === winnings.length - 1 - i ? '#f68301' : ''}` }}> <span className={styles.index}>{winnings.length - i}</span>  <span className={styles.amount}>{el}</span> </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}