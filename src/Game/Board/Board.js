import React, {memo} from 'react';
import Tile from './Tile';
import styles from './styles.module.css';

function Board({variants}){
    return(
        <div className={styles.container}>
            <Tile row={0} column={0} variants={variants}/>
            <Tile row={0} column={1} variants={variants}/>
            <Tile row={0} column={2} variants={variants}/>
            <Tile row={1} column={0} variants={variants}/>
            <Tile row={1} column={1} variants={variants}/>
            <Tile row={1} column={2} variants={variants}/>
            <Tile row={2} column={0} variants={variants}/>
            <Tile row={2} column={1} variants={variants}/>
            <Tile row={2} column={2} variants={variants}/>
        </div>
    )
}

export default memo(Board);