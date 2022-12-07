import React from 'react';
import {useGlobalContext} from "../context/index.jsx";
import {useNavigate} from "react-router-dom";
import styles from "../styles";

const GameLoad = ({}) => {
    const { walletAddress } = useGlobalContext();
    const navigate = useNavigate();

    return (
        <div className={`${styles.flexBetween} ${styles.gameLoadContainer}`}>

        </div>
    );
};

export default GameLoad;
// by Rokas with ❤️
