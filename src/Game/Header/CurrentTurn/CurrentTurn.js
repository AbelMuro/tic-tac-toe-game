import React from 'react';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';
import icons from './icons';

function CurrentTurn() {
    const turn = useSelector(state => state.turn);

    return(
        <div className={styles.container}>
            <img className={styles.icons} src={icons[`icon${turn.toUpperCase()}Turn`]}/>TURN
        </div>
    )
}

export default CurrentTurn;