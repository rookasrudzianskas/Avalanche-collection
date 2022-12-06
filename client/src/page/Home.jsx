import React from 'react';
import {PageHOC} from "../components";

const Home = () => {
  return (
    <div>

    </div>
  )
};

export default PageHOC(
    Home,
    <>Welcome to Avax Gods <br /> a Web3 NFT Battle-style Card Game</>,
    <>Connect your wallet to start playing<br />the ultimate web3 card game</>
);
