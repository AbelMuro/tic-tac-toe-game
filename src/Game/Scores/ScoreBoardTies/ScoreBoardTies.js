import React from 'react';
import { useSelector} from 'react-redux';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

function ScoreBoardTies({variants}) {
    const ties = useSelector(state => state.scores.ties);

    return(
        <motion.section className={styles.container} variants={variants}>
            <h1 className={styles.title}>
                TIES
            </h1>
            <p className={styles.score}>
                {ties}
            </p>
        </motion.section>
    )
}

export default ScoreBoardTies;