import React from 'react';
import styles from './styles.module.css';

function ScoreBoardX(){
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                X (P2)
            </h1>
            <p className={styles.score}>
                14
            </p>
        </section>
    )
}

export default ScoreBoardX;