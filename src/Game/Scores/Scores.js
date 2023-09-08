import React, {memo} from 'react';
import ScoreBoardX from './ScoreBoardX';
import ScoreBoardO from './ScoreBoardO';
import ScoreBoardTies from './ScoreBoardTies';
import styles from './styles.module.css';


//this is where i left off, i will need to change the components based on who the player is playing against, 
//another player or the cpu
function Scores() {

    return(
        <div className={styles.container}>
            <ScoreBoardX/>
            <ScoreBoardTies/>
            <ScoreBoardO/>
        </div>
    )
}

export default memo(Scores);