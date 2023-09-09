import React, {useEffect, useRef, memo} from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import { motion } from 'framer-motion';
import marks from './marks'

function Tile({row, column, setTilesSelected, variants}) {
    const tile = useSelector(state => state.board.tiles[row][column])
    const turn = useSelector(state => state.turn);
    const winningTiles = useSelector(state => state.board.winningTiles, shallowEqual);  
    const dispatch = useDispatch();
    const markRef = useRef();
    const tileRef = useRef();    

    const childVariants = {
        hidden: {opacity: 0},
        show: {opacity: 1}
    }

    const handleMark = () => {
        dispatch({type: 'UPDATE_BOARD', row, column, turn});    
        dispatch({type: 'CHECK_BOARD'}); 
        dispatch({type: 'CHECK_DRAW'});
        dispatch({type: 'CHANGE_TURN'});  

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
        <motion.div className={styles.container} onClick={handleMark} ref={tileRef} variants={variants} transition={{when: 'beforeChildren'}}>
            <motion.img className={styles.mark} ref={markRef} variants={childVariants}/>
        </motion.div>
    )
}

export default memo(Tile);