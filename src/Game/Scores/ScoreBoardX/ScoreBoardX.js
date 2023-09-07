import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles.module.css';

function ScoreBoardX(){
    const score = useSelector(state => state.scores.x)
    const playerOneMark = useSelector(state => state.menuOptions.playerOneMark)
    const winner = useSelector(state => state.board.winner);
    const dispatch = useDispatch();

    useEffect(() => {
        if(winner === 'x') 
            dispatch({type: 'UPDATE_SCORE_X'});
    }, [winner])

    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                X {`(${playerOneMark === 'x' ? 'P1' : 'P2'})`}
            </h1>
            <p className={styles.score}>
                {score}
            </p>
        </section>
    )
}

export default ScoreBoardX;