import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import restartIcon from './icons';

function Restart() {
    const dispatch = useDispatch();

    const handleRestart = () => {
        dispatch({type: 'RESTART'});
    }

    return(
        <button className={styles.container} onClick={handleRestart}>
            <img className={styles.icon} src={restartIcon}/>
        </button>
    )
}

export default Restart;