import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.css';

function ScoreBoardO() {
    const score = useSelector(state => state.scores.o);
    const playerOneMark = useSelector(state => state.menuOptions.playerOneMark);
    const winner = useSelector(state => state.board.winner);
    const dispatch = useDispatch();

    useEffect(() => {
        if(winner === 'o')
            dispatch({type: 'UPDATE_SCORE_O'})
    }, [winner])

    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                O{`(${playerOneMark === 'x' ? 'P2' : 'P1'})`}
            </h1>
            <p className={styles.score}>
                {score}
            </p>
        </section>
    )
}

export default ScoreBoardO;