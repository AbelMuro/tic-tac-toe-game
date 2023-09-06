import React from 'react';
import styles from './styles.module.css';

function ScoreBoardTies() {
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                TIES
            </h1>
            <p className={styles.score}>
                22
            </p>
        </section>
    )
}

export default ScoreBoardTies;