import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.css';

function ScoreBoardO() {
    const score = useSelector(state => state.scores.o);
    const playerOneMark = useSelector(state => state.menuOptions.playerOneMark);
    const playingAgainst = useSelector(state => state.menuOptions.playerAgainst);
    const winner = useSelector(state => state.board.winner);
    const dispatch = useDispatch();

    const playerTitle = () => {
        if(playingAgainst === 'cpu')
            return `O (${playerOneMark === 'o' ? 'YOU' : 'CPU'})`;
        else if(playingAgainst === 'player')
            return `O (${playerOneMark === 'o' ? 'P1' : 'P2'})`
    }


    useEffect(() => {
        if(winner === 'o')
            dispatch({type: 'UPDATE_SCORE_O'})
    }, [winner])

    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                {playerTitle()}
            </h1>
            <p className={styles.score}>
                {score}
            </p>
        </section>
    )
}

export default ScoreBoardO;