import React from 'react';
import {PageHOC} from "../components/index.js";
import {useNavigate} from "react-router-dom";
import styles from "../styles";

const JoinBattle = ({}) => {
    const navigate = useNavigate();

    return (
        <>
         <h2 className={styles.joinHeadText}>Available Battles:</h2>
         <p className={styles.infoText} onClick={() => navigate('/create-battle')}>Or create a new battle</p>
        </>
    );
};

export default PageHOC(
    JoinBattle,
    <>Join <br /> a Battle</>,
    <>Join already existing battles</>,
);
// by Rokas with ❤️
