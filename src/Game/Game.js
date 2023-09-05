import React from 'react';
import Header from './Header'
import Board from './Board';
import styles from './styles.module.css';


function Game() {
    return (
        <div className={styles.container}>
            <Header/>
            <Board/>
        </div>
    );
}

export default Game;