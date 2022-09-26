import * as React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <>
            <Link to={'/game'}>Rozpocznij grę</Link>
            <Link to={'/question'}>Przejdź do bazy pytań</Link>
        </>
    )
}