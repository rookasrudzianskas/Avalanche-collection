import React from 'react';
import {useGlobalContext} from "../context/index.jsx";
import {useNavigate} from "react-router-dom";
import styles from "../styles";
import {CustomButton} from "./index.js";

const GameLoad = ({}) => {
    const { walletAddress } = useGlobalContext();
    const navigate = useNavigate();

    return (
        <div className={`${styles.flexBetween} ${styles.gameLoadContainer}`}>
            <div className={styles.gameLoadBtnBox}>
                <CustomButton
                    title="Choose Battleground"
                    handleClick={() => navigate('/battleground')}
                    restStyles="mt-6"
                />
            </div>


        </div>
    );
};

export default GameLoad;
// by Rokas with ❤️
