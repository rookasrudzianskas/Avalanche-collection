import React from 'react';
import {useGlobalContext} from "../context/index.jsx";
import {useNavigate} from "react-router-dom";
import styles from "../styles";
import {CustomButton} from "./index.js";
import {player01, player02} from "../assets/index.js";

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

            <div className={`flex-1 ${styles.flexCenter} flex-col`}>
                <h1 className={`${styles.headText} text-center`}>Waiting for a <br /> worthy opponent</h1>
                <p className={styles.gameLoadText}>
                    Pro-tip: while you're waiting, choose your preferred battleground
                </p>

                <div className={styles.gameLoadPlayersBox}>
                    <div className={`${styles.flexCenter} flex-col`}>
                        <img src={player01} className={styles.gameLoadPlayerImg} />
                        <p className={styles.gameLoadPlayerText}>
                            {walletAddress.slice(0, 9)}...{walletAddress.slice(-9)}
                        </p>
                    </div>

                    <h2 className={styles.gameLoadVS}>Vs</h2>

                    <div className={`${styles.flexCenter} flex-col`}>
                        <img src={player02} className={styles.gameLoadPlayerImg} />
                        <p className={styles.gameLoadPlayerText}>??????????</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameLoad;
// by Rokas with ❤️
