import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import styles from '../styles';
import { useGlobalContext } from '../context';
import { attack, attackSound, defense, defenseSound, player01 as player01Icon, player02 as player02Icon } from '../assets';

const Battle = ({}) => {
    const { contract, gameData, walletAddress, showAlert, battleGround, setBattleGround} = useGlobalContext();
    const [player1, setPlayer1] = useState({});
    const [player2, setPlayer2] = useState({});  // battle/NameofBattle
    const {battleName} = useParams();
    const navigate = useNavigate();


    return (
        <div className={`${styles.flexBetween} ${styles.gameContainer} ${battleGround}`}>
            <h1 className="text-xl text-white">{battleName}</h1>
        </div>
    );
};

export default Battle;
// by Rokas with ❤️
