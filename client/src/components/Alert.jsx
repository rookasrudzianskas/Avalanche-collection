import React from 'react';
import styles from "../styles";
import {AlertIcon} from "../assets/index.js";

const Alert = ({type, message}) => {
    return (
        <div className={`${styles.alertContainer} ${styles.flexCenter}`}>
            <div className={`${styles.alertWrapper} ${styles[type]}`}>
                <AlertIcon type={type} /> {message}
            </div>
        </div>
    );
};

export default Alert;
// by Rokas with ❤️
