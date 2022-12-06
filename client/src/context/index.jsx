import React, {createContext, useContext, useState} from 'react';

const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
    // Interacting with smart contracts
    const [walletAddress, setWalletAddress] = useState("");

    const updateCurrentWalletAddress = async () => {
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
    }
    return (
        <GlobalContext.Provider
            value={{
                // state
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);
