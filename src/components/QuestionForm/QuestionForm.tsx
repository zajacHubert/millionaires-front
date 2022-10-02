import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAddQuestionMutation } from '../../features/api-questions-slice';
import { DifficultyLevel } from '../../types/question';
import styles from './QuestionForm.module.scss';

type Inputs = {
    txt: string,
    ansA: string,
    ansB: string,
    ansC: string,
    ansD: string,
    correctAns: string,
    difficultyLevel: DifficultyLevel,
}

export const QuestionForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            txt: '',
            ansA: '',
            ansB: '',
            ansC: '',
            ansD: '',
            correctAns: '',
            difficultyLevel: DifficultyLevel.EASY,
        }
    });
    const [addQuestion] = useAddQuestionMutation();

    const handleFormSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data);
        await addQuestion(data);
        reset();
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Dodaj nowe pytanie</h2>
            <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>

                <label htmlFor="txt">Treść pytania</label>
                <textarea id="txt"  {...register('txt', {
                    required: 'To pole jest wymagane',
                    minLength: {
                        value: 5,
                        message: 'Minimalna długość to 5 znaków',
                    },
                    maxLength: {
                        value: 300,
                        message: 'Maksymalna długość to 200 znaków'
                    }
                })} />
                {errors.txt && <p>{errors.txt.message}</p>}

                <label htmlFor="ansA">Odpowiedź A</label>
                <input id="ansA" type="text"  {...register('ansA', {
                    required: 'To pole jest wymagane',
                    maxLength: {
                        value: 30,
                        message: 'Maksymalna długość to 30 znaków'
                    }
                })} />
                {errors.ansA && <p>{errors.ansA.message}</p>}

                <label htmlFor="ansB">Odpowiedź B</label>
                <input id="ansB" type="text"  {...register('ansB', {
                    required: 'To pole jest wymagane',
                    maxLength: {
                        value: 30,
                        message: 'Maksymalna długość to 30 znaków'
                    }
                })} />
                {errors.ansB && <p>{errors.ansB.message}</p>}

                <label htmlFor="ansC">Odpowiedź C</label>
                <input id="ansC" type="text"  {...register('ansC', {
                    required: 'To pole jest wymagane',
                    maxLength: {
                        value: 30,
                        message: 'Maksymalna długość to 30 znaków'
                    }
                })} />
                {errors.ansC && <p>{errors.ansC.message}</p>}

                <label htmlFor="ansD">Odpowiedź D</label>
                <input id="ansD" type="text"  {...register('ansD', {
                    required: 'To pole jest wymagane',
                    maxLength: {
                        value: 30,
                        message: 'Maksymalna długość to 30 znaków'
                    }
                })} />
                {errors.ansD && <p>{errors.ansD.message}</p>}

                <label htmlFor="correctAns">Poprawna odpowiedź</label>
                <input id="correctAns" type="text"  {...register('correctAns', {
                    required: 'To pole jest wymagane',
                    maxLength: {
                        value: 30,
                        message: 'Maksymalna długość to 30 znaków'
                    }
                })} />
                {errors.correctAns && <p>{errors.correctAns.message}</p>}

                <label htmlFor="difficultyLevel">Poziom trudności</label>
                <select id="difficultyLevel" {...register('difficultyLevel')}>
                    <option value={DifficultyLevel.EASY}>Łatwe</option>
                    <option value={DifficultyLevel.MEDIUM}>Średnie</option>
                    <option value={DifficultyLevel.HARD}>Trudne</option>
                </select>
                <input type="submit" />

            </form>
            <Link className={styles.return} to={'/'}>Powrót na stronę główną</Link>
        </div>
    )
}