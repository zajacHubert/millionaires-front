import React from 'react';
import { Link } from 'react-router-dom';

export const QuestionView = () => {
    return (
        <>
            <Link to={'/question/form'}>Dodaj nowe pytanie</Link>
            <Link to={'/question/list'}>Zobacz pytania</Link>

        </>
    )
}