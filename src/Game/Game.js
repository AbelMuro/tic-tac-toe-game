import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from './Header'
import Board from './Board';
import Scores from './Scores';
import DisplayWinner from './DisplayWinner';
import styles from './styles.module.css';

function Game() {
    const board = useSelector(state => state.board.tiles);
    const menuOptions = useSelector(state => state.menuOptions);
    const turn = useSelector(state => state.turn);
    const dispatch = useDispatch();

    useEffect(() => {
        const playerOneMark = menuOptions.playerOneMark;
        const against = menuOptions.playerAgainst;

        if(playerOneMark === 'o' && against === 'cpu' && playerOneMark !== turn){
            dispatch({type: 'CPU_MOVE', mark: 'x'})
            dispatch({type: 'CHECK_BOARD'});
            dispatch({type: 'CHANGE_TURN'})
        }
            
    },[board])

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