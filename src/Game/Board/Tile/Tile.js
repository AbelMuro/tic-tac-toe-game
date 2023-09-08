import React, {useEffect, useRef, memo} from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import { motion } from 'framer-motion';
import marks from './marks'

function Tile({row, column, setTilesSelected}) {
    const tile = useSelector(state => state.board.tiles[row][column])
    const turn = useSelector(state => state.turn);
    const winningTiles = useSelector(state => state.board.winningTiles, shallowEqual);  
    const menuOptions = useSelector(state => state.menuOptions);
    const dispatch = useDispatch();
    const markRef = useRef();
    const tileRef = useRef();    

    const handleMark = () => {
        dispatch({type: 'UPDATE_BOARD', row, column, turn});    
        dispatch({type: 'CHECK_BOARD'}); 
        dispatch({type: 'CHANGE_TURN'});  
        if(menuOptions.playerAgainst === 'cpu' && menuOptions.playerOneMark === 'x'){
            dispatch({type: 'CPU_MOVE', mark: 'o'});
            dispatch({type: 'CHECK_BOARD'}); 
            dispatch({type: 'CHANGE_TURN'});           
        }

    }

    //useEffect that decides which icon to display when the user hovers over the tile
    useEffect(() => {
        if(tile !== 0) return;
        markRef.current.src = turn === 'x' ? marks['hoverIconX'] : marks['hoverIconO'];
    }, [turn])


    useEffect(() => {
        if(tile === 0){                                     //tile has been reset
            tileRef.current.style.pointerEvents = '';
            markRef.current.src = turn === 'x' ? marks['hoverIconX'] : marks['hoverIconO'];
            markRef.current.style.transform = '';
            tileRef.current.style.backgroundColor = '';   
        }
        else{                                               //tile has been selected
            tileRef.current.style.pointerEvents = 'none';
            markRef.current.src = tile === 'x' ? marks['iconX'] : marks['iconO'];
            markRef.current.style.transform = 'scale(1)';
            setTilesSelected(prevState => prevState + 1);
        }
    }, [tile])

    //we check if there are 3 consecutives marks on the board
    useEffect(() => {
        if(!winningTiles.length) return;

        winningTiles.map((winningTile) => {
            if(winningTile[0] === row && winningTile[1] === column){
                tileRef.current.style.backgroundColor = tile === 'x' ? '#31C3BD' : '#F2B137';
                markRef.current.src = marks[`winning${tile.toUpperCase()}`]
            }   
        })
    }, [winningTiles])

    return(
        <div className={styles.container} onClick={handleMark} ref={tileRef}>
            <img className={styles.mark} ref={markRef}/>
        </div>
    )
}

export default memo(Tile);