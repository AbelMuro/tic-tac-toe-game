import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.css';



function ScoreBoardTies() {
    const ties = useSelector(state => state.scores.ties);
    const board = useSelector(state => state.board.tiles);
    const winner = useSelector(state => state.board.winner);
    const dispatch = useDispatch();

    //i need to find a better way of traversing through the board and checking if the board is full AND has no 3 consecutive marks
    useEffect(() => {
        let tiles = 0;
        board.forEach((row) => {
            row.forEach((col) => {
                if(col !== 0)
                    tiles++;
            })
        })

        if(tiles === 9 && !winner){
            dispatch({type: 'UPDATE_TIES'});
            dispatch({type: 'SET_DRAW'});
        }
            
    }, [board])

    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                TIES
            </h1>
            <p className={styles.score}>
                {ties}
            </p>
        </section>
    )
}

export default ScoreBoardTies;