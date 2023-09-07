import React from 'react';
import { useSelector} from 'react-redux';
import styles from './styles.module.css';



function ScoreBoardTies() {
    const ties = useSelector(state => state.scores.ties);

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