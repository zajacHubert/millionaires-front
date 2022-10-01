import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Question.module.scss';

export const Question = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.btn} to={'/question/form'}>Dodaj nowe pytanie</Link>
            <Link className={styles.btn} to={'/question/list'}>Zobacz pytania</Link>
        </div>
    )
}