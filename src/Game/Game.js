import React from 'react';
import Header from './Header'
import Board from './Board';
import Scores from './Scores';
import DisplayWinner from './DisplayWinner';
import styles from './styles.module.css';

function Game() {
    return (
        <>        
            <div className={styles.container}>
                <Header/>
                <Board/>
                <Scores/>
            </div>
            <DisplayWinner/>
        </>

    );
}

export default Game;