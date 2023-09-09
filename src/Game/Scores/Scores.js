import React, {memo} from 'react';
import ScoreBoardX from './ScoreBoardX';
import ScoreBoardO from './ScoreBoardO';
import ScoreBoardTies from './ScoreBoardTies';
import styles from './styles.module.css';

function Scores({variants}) {

    return(
        <div className={styles.container}>
            <ScoreBoardX variants={variants}/>
            <ScoreBoardTies variants={variants}/>
            <ScoreBoardO variants={variants}/>
        </div>
    )
}

export default memo(Scores);