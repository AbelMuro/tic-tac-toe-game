import React from 'react';
import styles from './styles.module.css';
import icons from './icons';

function CurrentTurn() {
    return(
        <div className={styles.container}>
            <img className={styles.icons} src={icons['iconOTurn']}/>TURN
        </div>
    )
}

export default CurrentTurn;