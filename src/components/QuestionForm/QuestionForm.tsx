import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    txt: string,
    ansA: string,
    ansB: string,
    ansC: string,
    ansD: string,
    correctAns: string,
}

export const QuestionForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <input type="text"  {...register('txt')} />
                <input type="text"  {...register('ansA')} />
                <input type="text"  {...register('ansB')} />
                <input type="text"  {...register('ansC')} />
                <input type="text"  {...register('ansD')} />
                <input type="text"  {...register('txt')} />
                <select {...register('txt')}>
                    <option value="easy">Łatwe</option>
                    <option value="medium">Średnie</option>
                    <option value="hard">Trudne</option>
                </select>
                <input type="submit" />

            </form>
        </div>
    )
}