import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

function DisplayWinner() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const overlayRef = useRef();
    const dialogRef = useRef();
    const winner = useSelector(state => state.board.winner)
    const playerOneMark = useSelector(state => state.menuOptions.playerOneMark)

    const handleQuit = () => {
        dispatch({type: 'RESTART'});
        navigate('/')
    }

    const handleNextRound = () => {
        dispatch({type: 'NEW_GAME'});
    }

    useEffect(() => {
        if(winner){
            overlayRef.current.style.display = 'flex';
            setTimeout(() => {
                if(!overlayRef.current || !dialogRef.current) return
                overlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                dialogRef.current.style.transform = 'scaleY(1)'
            }, 10)
        }
        else{
            dialogRef.current.style.transform = '';
            overlayRef.current.style.backgroundColor = '';
            setTimeout(() => {
                if(!overlayRef.current) return
                overlayRef.current.style.display = '';               
            }, 200)
        }
    }, [winner])

    return(
        <div className={styles.overlay} ref={overlayRef}>
            <dialog open={true} className={styles.dialog} ref={dialogRef}>
                {
                    winner === 'draw' ? 
                        <h1 className={styles.title}> ROUND TIED</h1> :
                        <>
                            <h2 className={styles.title_one}>
                                {playerOneMark === winner ? 'Player 1 Wins!' : 'Player 2 Wins!'}
                            </h2>
                            <h1 className={styles.title_two}>
                                Takes the Round
                            </h1>                    
                        </> 
                }
                <div className={styles.buttons}>
                    <button className={styles.quit} onClick={handleQuit}>
                        Quit
                    </button>
                    <button className={styles.next} onClick={handleNextRound}>
                        next round
                    </button>
                </div>
            </dialog>
        </div>
    )
}

export default DisplayWinner;