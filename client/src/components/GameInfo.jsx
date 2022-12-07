import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from './CustomButton';
import { useGlobalContext } from '../context';
import { alertIcon, gameRules } from '../assets';
import styles from '../styles';


const GameInfo = ({}) => {
    const { contract, gameData, setErrorMessage, setShowAlert } = useGlobalContext();
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const navigate = useNavigate();
    
    
    return (
        <div>

        </div>
    );
};

export default GameInfo;
// by Rokas with ❤️
