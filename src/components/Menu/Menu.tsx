import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

export const Menu = () => {
    return (
        <>
            <div className={styles.container}>
                <Link className={styles.btn} to={'/game'}>Rozpocznij grę</Link>
                <Link className={styles.btn} to={'/question'}>Przejdź do bazy pytań</Link>
            </div>
        </>
    )
}