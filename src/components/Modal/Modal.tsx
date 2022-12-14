import React, { Dispatch } from "react";
import styles from './Modal.module.scss';
interface Props {
    setShow: Dispatch<React.SetStateAction<boolean>>;
    setRedirect: Dispatch<React.SetStateAction<boolean>>;
    message: string;
    questionIndex: number;
    isHelper: boolean;
}

export const Modal = ({ setShow, setRedirect, message, isHelper }: Props) => {

    const handleClick = () => {
        if (!isHelper) {
            setShow(false);
            setRedirect(message !== 'Poprawna odpowiedź!');
        }
        else if (isHelper) {
            setShow(false);
        }
    }

    return (
        <div className={styles.overlay} >
            <div className={styles.dialog}>
                <h2 className={styles.dialog__title}>{message}</h2>
                <button
                    className={styles.dialog__btn}
                    onClick={handleClick}
                >
                    ok
                </button>
            </div >
        </div>
    )
}