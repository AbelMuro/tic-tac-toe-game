import React from 'react';
import ScoreBoardX from './ScoreBoardX';
import ScoreBoardO from './ScoreBoardO';
import ScoreBoardTies from './ScoreBoardTies';
import styles from './styles.module.css';

function Scores() {

    return(
        <div className={styles.container}>
            <ScoreBoardX/>
            <ScoreBoardTies/>
            <ScoreBoardO/>
        </div>
    )
}

export default Scores;