import React, {useState} from 'react';
import {CustomButton, CustomInput, PageHOC} from "../components";
import {useGlobalContext} from "../context/index.jsx";

const Home = () => {
  const {contract, walletAddress} = useGlobalContext();
  const [playerName, setPlayerName] = useState('');

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
            handleClick={() => {}}
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
