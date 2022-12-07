import React, {useEffect, useState} from 'react';
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

    useEffect(() => {
        const getPlayerInfo = async () => {
            try {
                let player01Address = null;
                let player02Address = null;

                if(gameData.activeBattle.players[0].toLowerCase() === walletAddress.toLowerCase()) {
                    player01Address = gameData.activeBattle.players[0];
                    player02Address = gameData.activeBattle.players[1];
                } else {
                    player01Address = gameData.activeBattle.players[1];
                    player02Address = gameData.activeBattle.players[0];
                }
            } catch (error) {
                console.log(error);
            }
        }
        if(contract && gameData.activeBattle) getPlayerInfo();
    },[contract, gameData. battleName]);


    return (
        <div className={`${styles.flexBetween} ${styles.gameContainer} ${battleGround}`}>
            <h1 className="text-xl text-white">{battleName}</h1>
        </div>
    );
};

export default Battle;
// by Rokas with ❤️
