import React from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import SelectMark from './SelectMark';
import logo from './icons';

function MainMenu() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const playAgainstCPU = () => {
        dispatch({type: 'UPDATE_PLAYER', against: 'cpu'})
        navigate('/game')
    }

    const playAgainstPlayer = () => {
        dispatch({type: 'UPDATE_PLAYER', against: 'player'})
        navigate('/game')
    }

    return(
        <div className={styles.container}>
            <img className={styles.logo} src={logo}/>
            <SelectMark/>
            <button className={styles.cpuButton} onClick={playAgainstCPU}>
                New Game (vs cpu)
            </button>
            <button className={styles.playerButton} onClick={playAgainstPlayer}>
                New Game (vs player)
            </button>
        </div>
    )
}

export default MainMenu;