import React from 'react';
import { Link } from 'react-router-dom';

export const QuestionView = () => {
    return (
        <>
            <Link to={'/question/form'}></Link>
            <Link to={'/question/list'}></Link>

        </>
    )
}