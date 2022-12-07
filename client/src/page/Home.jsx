import React, {useEffect, useState} from 'react';
import {CustomButton, CustomInput, PageHOC} from "../components";
import {useGlobalContext} from "../context/index.jsx";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const {contract, walletAddress, setShowAlert, gameData, setErrorMessage} = useGlobalContext();
  const [playerName, setPlayerName] = useState('');

  const handleClick = async () => {
    try {
        const playerExists = await contract?.isPlayer(walletAddress);

        if(!playerExists) {
            await contract?.registerPlayer(playerName, playerName);

            setShowAlert({
                status: true,
                type: "info",
                message: `${playerName} is being summoned to the arena!`
            });
        }
    } catch (error) {
        setErrorMessage(error.message);
    }
  }

  useEffect(() => {
      const checkForPlayerToken = async () => {
          const playerExists = await contract.isPlayer(walletAddress);
          const playerTokenExists = await contract.isPlayerToken(walletAddress);

          if(playerExists && playerTokenExists) navigate('/create-battle');
      }
      if(contract) checkForPlayerToken();
  }, [contract]);

  useEffect(() => {
      if(gameData.activeBattle) {
          navigate(`/battle/${gameData.activeBattle.name}`);
      }
  }, [gameData]);

  return (
    <div className="flex flex-col">
      <CustomInput
        label="Player Name"
        placeholder="Enter your player name"
        value={playerName}
        handleValueChange={setPlayerName}
      />

        <CustomButton
            title={"Register"}
            handleClick={handleClick}
            restStyles={"mt-6"}
        />
    </div>
  )
};

export default PageHOC(
    Home,
    <>Welcome to Avax Gods <br /> a Web3 NFT Battle-style Card Game</>,
    <>Connect your wallet to start playing<br />the ultimate web3 card game</>
);
