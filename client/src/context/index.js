import React, {createContext, useContext} from 'react';

const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
    // Interacting with smart contracts

    return <GlobalContext.Provider
        value={{
            // state
        }}
    >
        {children}
    </GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
