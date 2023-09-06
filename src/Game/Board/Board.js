import React from 'react';
import Tile from './Tile';
import styles from './styles.module.css';

function Board(){
    return(
        <div className={styles.container}>
            <Tile row={0} column={0}/>
            <Tile row={0} column={1}/>
            <Tile row={0} column={2}/>
            <Tile row={1} column={0}/>
            <Tile row={1} column={1}/>
            <Tile row={1} column={2}/>
            <Tile row={2} column={0}/>
            <Tile row={2} column={1}/>
            <Tile row={2} column={2}/>
        </div>
    )
}

export default Board;