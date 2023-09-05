import React from 'react';
import CurrentTurn from './CurrentTurn';
import Restart from './Restart';
import styles from './styles.module.css';
import icons from './icons';

function Game() {
    return (
        <div className={styles.container}>
            <header className={styles.headerBar}>
                <img className={styles.logo} src={icons['logo']}/>
                <CurrentTurn/>  
                <Restart/>              
            </header>
        </div>
    );
}

export default Game;