import React from 'react';
import {CustomInput, PageHOC} from "../components";
import {useGlobalContext} from "../context/index.jsx";

const Home = () => {
  const {contract, walletAddress} = useGlobalContext();

  return (
    <div className="flex flex-col">
      <CustomInput />
    </div>
  )
};

export default PageHOC(
    Home,
    <>Welcome to Avax Gods <br /> a Web3 NFT Battle-style Card Game</>,
    <>Connect your wallet to start playing<br />the ultimate web3 card game</>
);
