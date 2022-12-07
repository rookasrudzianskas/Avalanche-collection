import React, {createContext, useContext, useEffect, useState} from 'react';
import Web3Modal from 'web3modal';
import {ethers} from "ethers";
import {ABI, ADDRESS} from "../contract/index.js";
import {createEventListeners} from "./createEventListeners.js";
import {useNavigate} from "react-router-dom";

const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
    // Interacting with smart contracts
    const navigate = useNavigate();
    const [walletAddress, setWalletAddress] = useState("");
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [showAlert, setShowAlert] = useState({
        status: false,
        type: 'info',
        message: ''
    });
    const [battleName, setBattleName] = useState("");
    const [gameData, setGameData] = useState({ players: [], pendingBattles: [], activeBattle: null });
    const [updateGameData, setUpdateGameData] = useState(0);
    const [battleGround, setBattleGround] = useState('bg-astral');

    useEffect(() => {
        const battlegroundFromLocalStorage = localStorage.getItem('battleGround');

        if (battlegroundFromLocalStorage) {
            setBattleGround(battlegroundFromLocalStorage);
        } else {
            localStorage.setItem('battleGround', battleGround);
        }
    }, []);


    //* Set the wallet address to the state
    const updateCurrentWalletAddress = async () => {
        const accounts = await window?.ethereum?.request({ method: 'eth_requestAccounts' });

        if (accounts) setWalletAddress(accounts[0]);
    };

    useEffect(() => {
        updateCurrentWalletAddress();

        window?.ethereum?.on('accountsChanged', updateCurrentWalletAddress);
    }, []);

    //* Set the smart contract and provider to the state
    useEffect(() => {
        const setSmartContractAndProvider = async () => {
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const newProvider = new ethers.providers.Web3Provider(connection);
            const signer = newProvider.getSigner();
            const newContract = new ethers.Contract(ADDRESS, ABI, signer);

            setProvider(newProvider);
            setContract(newContract);
        };

        setSmartContractAndProvider();
    }, []);


    useEffect(() => {
        if(contract) {
            // if (step === -1 && contract) {
                createEventListeners({
                    navigate,
                    contract,
                    provider,
                    walletAddress,
                    setShowAlert,
                    setUpdateGameData,
                });
            // }
        }
    }, [contract]);

    useEffect(() => {
        if (showAlert?.status) {
            const timer = setTimeout(() => {
                setShowAlert({ status: false, type: 'info', message: '' });
            }, [5000]);

            return () => clearTimeout(timer);
        }
    }, [showAlert]);


    // Set the game data to the state
    useEffect(() => {
        const fetchGameData = async () => {
            if (contract) {
                const fetchedBattles = await contract.getAllBattles();
                const pendingBattles = fetchedBattles.filter((battle) => battle.battleStatus === 0);
                let activeBattle = null;

                fetchedBattles.forEach((battle) => {
                    if (battle.players.find((player) => player.toLowerCase() === walletAddress.toLowerCase())) {
                        if(battle.winner.startsWith('0x00')) {
                            activeBattle = battle;
                        }
                    }
                });

                setGameData({ pendingBattles: pendingBattles.slice(1), activeBattle });
            }
        }
        fetchGameData();
    }, [contract]);


    return (
        <GlobalContext.Provider
            value={{
                // state
                contract,
                walletAddress,
                showAlert,
                setShowAlert,
                battleName,
                setBattleName,
                gameData,
                battleGround,
                setBattleGround,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);
