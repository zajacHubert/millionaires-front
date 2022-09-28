import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Question } from '../../types/question';
import { getAllQuestions } from '../../utils/axios-functions';
import { drawQuestions } from '../../utils/drawQuestions';
import { winnings } from '../../utils/winnings';
import { Modal } from '../Modal/Modal';

export const SingleQuestion = () => {
    const [drawed, setDrawed] = useState<Question[] | null>(null);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await getAllQuestions();
            const drawedQuestions = drawQuestions(res.data);
            setDrawed(drawedQuestions);
        })()

    }, [])

    if (!drawed) {
        return null;
    }

    console.log(drawed);




    const checkAnswer = (answer: string) => {
        if (drawed[questionIndex].correctAns === answer) {
            if (questionIndex < 11) {
                setMessage('Poprawna odpowiedź!');
                setShow(true);
                setQuestionIndex(prev => prev + 1)
            } else {
                setMessage('Gratulacje! Opowiedziałeś poprawnie na wszytskie pytania i wygrałeś nagrodę główną 1000000');
            }
        } else {
            setMessage(questionIndex === 0
                ?
                'Niestety niepoprawna odpowiedź, nie udało się nic wygrać'
                :
                `Niestety niepoprawna odpowiedź, Twoja wygrana to ${winnings[questionIndex - 1]} zł`);
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

                />
            }
            {redirect && <Navigate to="/" replace />}
            <div>
                <div>
                    <h3>{drawed[questionIndex].txt}</h3>
                    <button onClick={() => checkAnswer(drawed[questionIndex].ansA)}>A: {drawed[questionIndex].ansA}</button>
                    <button onClick={() => checkAnswer(drawed[questionIndex].ansB)}>B: {drawed[questionIndex].ansB}</button>
                    <button onClick={() => checkAnswer(drawed[questionIndex].ansC)}>C: {drawed[questionIndex].ansC}</button>
                    <button onClick={() => checkAnswer(drawed[questionIndex].ansD)}>D: {drawed[questionIndex].ansD}</button>
                </div>
                <div>
                    <div>
                        <button>Rezygnuję</button>
                        <button>koło1</button><button>koło2</button><button>koło3</button>
                    </div>
                    <div>
                        <ul>
                            {[...winnings].reverse().map((el, i) => (
                                <li key={i}>{winnings.length - i} {el}</li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}