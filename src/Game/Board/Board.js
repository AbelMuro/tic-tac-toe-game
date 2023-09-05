import React from 'react';
import Tile from './Tile';
import styles from './styles.module.css';

function Board(){
    return(
        <div className={styles.container}>
            <Tile/>
        </div>
    )
}

export default Board;