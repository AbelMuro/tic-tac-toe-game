import React, {useEffect, useRef, useState} from 'react';
import { createSelector } from '@reduxjs/toolkit';
import styles from './styles.module.css';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import { motion } from 'framer-motion';
import marks from './marks'

function Tile({row, column}) {
    const [tileSelected, setTileSelected] = useState(false);
    const restart = useSelector(state => state.restart);
    const turn = useSelector(state => state.turn);
    const winningTiles = useSelector(state => state.board.winningTiles, shallowEqual);  //this is where i left off   
    const dispatch = useDispatch();
    const markRef = useRef();
    const tileRef = useRef();    


    const handleMark = () => {
        setTileSelected(true);
    }

    useEffect(() => {
        if(!tileSelected) return;
        tileRef.current.style.pointerEvents = 'none';
        markRef.current.src = turn === 'x' ? marks['iconX'] : marks['iconO'];
        markRef.current.style.transform = 'scale(1)';
        dispatch({type: 'UPDATE_BOARD', row, column, turn});    
        dispatch({type: 'CHECK_BOARD'});         
        dispatch({type: 'CHANGE_TURN'});
    }, [tileSelected])

    useEffect(() => {
        console.log('turn')
        if(tileSelected) return;
        markRef.current.src = turn === 'x' ? marks['hoverIconX'] : marks['hoverIconO'];
    }, [turn])

    useEffect(() => {
        if(!winningTiles.length) return;
        tileRef.current.style.pointerEvents = 'none';

        winningTiles.map((tile) => {
            if(tile[0] === row && tile[1] === column){
                tileRef.current.style.backgroundColor = winningMark === 'x' ? '#31C3BD' : '#F2B137';
                markRef.current.src = marks[`winning${winningMark.toUpperCase()}`]
            }   
        })
    }, [winningTiles])


    useEffect(() => {
        if(!restart) return;

        tileRef.current.style.pointerEvents = '';
        markRef.current.src = '';
        markRef.current.style.transform = '';
        setTileSelected(false);
        dispatch({type: 'RESET'});
    }, [restart])

    return(
        <div className={styles.container} onClick={handleMark} ref={tileRef}>
            <img className={styles.mark} ref={markRef}/>
        </div>
    )
}

export default Tile;