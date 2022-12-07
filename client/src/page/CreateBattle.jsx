import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles';
import { useGlobalContext } from '../context';
import {CustomButton, CustomInput, GameLoad, PageHOC} from '../components';

const CreateBattle = () => {
    const navigate = useNavigate();
    const { contract, battleName, setBattleName } = useGlobalContext();
    const [waitBattle, setWaitBattle] = useState(true);

    const handleClick = async () => {
        if (battleName === '' || battleName.trim() === '') return null;

        try {
            await contract.createBattle(battleName);
            setWaitBattle(true);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            {waitBattle && <GameLoad />}

            <div className="flex flex-col mb-5">
                <CustomInput
                    label="Battle"
                    placeholder="Enter Battle Name"
                    value={battleName}
                    handleValueChange={setBattleName}
                />

                <CustomButton
                    title={'Create Battle'}
                    handleClick={handleClick}
                    restStyles="mt-6"
                />
            </div>
            <p className={styles.infoText} onClick={() => navigate("/join-battle")}>Or join already existing battles</p>
        </>
    )
};

export default PageHOC(
    CreateBattle,
    <>Create <br /> a new Battle</>,
    <>Create your own battle<br />and wait wait for others to join</>
);
