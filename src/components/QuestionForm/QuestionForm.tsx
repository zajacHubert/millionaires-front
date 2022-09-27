import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DifficultyLevel } from '../../types/question';

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

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
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

    const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }

    console.log(errors);

    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <textarea  {...register('txt', {
                    required: 'To pole jest wymagane',
                    minLength: {
                        value: 5,
                        message: 'Minimalna długość to 5 znaków',
                    },
                    maxLength: {
                        value: 200,
                        message: 'Maksymalna długość to 200 znaków'
                    }
                })} />
                {errors.txt && <p>{errors.txt.message}</p>}
                <input type="text"  {...register('ansA', {
                    required: 'To pole jest wymagane',
                    maxLength: {
                        value: 30,
                        message: 'Maksymalna długość to 30 znaków'
                    }
                })} />
                {errors.ansA && <p>{errors.ansA.message}</p>}

                <input type="text"  {...register('ansB', {
                    required: 'To pole jest wymagane',
                    maxLength: {
                        value: 30,
                        message: 'Maksymalna długość to 30 znaków'
                    }
                })} />
                {errors.ansB && <p>{errors.ansB.message}</p>}

                <input type="text"  {...register('ansC', {
                    required: 'To pole jest wymagane',
                    maxLength: {
                        value: 30,
                        message: 'Maksymalna długość to 30 znaków'
                    }
                })} />
                {errors.ansC && <p>{errors.ansC.message}</p>}

                <input type="text"  {...register('ansD', {
                    required: 'To pole jest wymagane',
                    maxLength: {
                        value: 30,
                        message: 'Maksymalna długość to 30 znaków'
                    }
                })} />
                {errors.ansD && <p>{errors.ansD.message}</p>}

                <input type="text"  {...register('correctAns', {
                    required: 'To pole jest wymagane',
                    maxLength: {
                        value: 30,
                        message: 'Maksymalna długość to 30 znaków'
                    }
                })} />
                {errors.correctAns && <p>{errors.correctAns.message}</p>}

                <select {...register('difficultyLevel')}>
                    <option value={DifficultyLevel.EASY}>Łatwe</option>
                    <option value={DifficultyLevel.MEDIUM}>Średnie</option>
                    <option value={DifficultyLevel.HARD}>Trudne</option>
                </select>
                <input type="submit" />

            </form>
        </div>
    )
}