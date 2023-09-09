import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from './Header'
import Board from './Board';
import Scores from './Scores';
import DisplayWinner from './DisplayWinner';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

function Game() {
    const board = useSelector(state => state.board.tiles);
    const menuOptions = useSelector(state => state.menuOptions);
    const turn = useSelector(state => state.turn);
    const winner = useSelector(state => state.board.winner);
    const containerRef = useRef();
    const firstRender = useRef(true);
    const dispatch = useDispatch();

    const variants = {
        hidden: {scale: 0},
        show: {
            scale: 1,
            transition: {type: 'spring', stiffness: 150, damping: 6}
        }
    }

    //this function is handles the moves for the cpu
    useEffect(() => {
        const playerOneMark = menuOptions.playerOneMark;
        const against = menuOptions.playerAgainst;
        if(winner)
            return     
        else if(against === 'cpu' && playerOneMark !== turn){ 
            containerRef.current.style.pointerEvents = 'none';
            setTimeout(() => {
                if(!containerRef.current) return;
                dispatch({type: 'CPU_MOVE', mark: turn})
                dispatch({type: 'CHECK_BOARD'});
                dispatch({type: 'CHECK_DRAW'});
                dispatch({type: 'CHANGE_TURN'});  
                containerRef.current.style.pointerEvents = '';      
            }, playerOneMark === 'o' ? firstRender.current ? 3000 : 800 : 800)
            firstRender.current = false;
        } 
    },[board, winner])

    return (
        <>        
            <motion.div className={styles.container} ref={containerRef} initial='hidden' animate='show' transition={{staggerChildren: 0.2}}>
                <Header variants={variants}/>
                <Board variants={variants}/>
                <Scores variants={variants}/>
            </motion.div>
            <DisplayWinner/>
        </>

    );
}

export default Game;