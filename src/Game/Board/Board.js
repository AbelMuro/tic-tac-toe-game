import React, {useState, useEffect, memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Tile from './Tile';
import styles from './styles.module.css';

function Board({variants}){
    const [tilesSelected, setTilesSelected] = useState(0);
    const winner = useSelector(state => state.board.winner)
    const dispatch = useDispatch();

    //this will check if the game is a draw
    useEffect(() => {
        if(tilesSelected === 9 && !winner){
            setTilesSelected(0);
            dispatch({type: 'UPDATE_TIES'});  
            dispatch({type: 'SET_DRAW'});         
        }
        else if(winner)
            setTilesSelected(0)
    }, [tilesSelected, winner])


    return(
        <div className={styles.container}>
            <Tile row={0} column={0} setTilesSelected={setTilesSelected} variants={variants}/>
            <Tile row={0} column={1} setTilesSelected={setTilesSelected} variants={variants}/>
            <Tile row={0} column={2} setTilesSelected={setTilesSelected} variants={variants}/>
            <Tile row={1} column={0} setTilesSelected={setTilesSelected} variants={variants}/>
            <Tile row={1} column={1} setTilesSelected={setTilesSelected} variants={variants}/>
            <Tile row={1} column={2} setTilesSelected={setTilesSelected} variants={variants}/>
            <Tile row={2} column={0} setTilesSelected={setTilesSelected} variants={variants}/>
            <Tile row={2} column={1} setTilesSelected={setTilesSelected} variants={variants}/>
            <Tile row={2} column={2} setTilesSelected={setTilesSelected} variants={variants}/>
        </div>
    )
}

export default memo(Board);