import React from 'react';
import styles from './styles.module.css';
import restartIcon from './icons';

function Restart() {
    return(
        <button className={styles.container}>
            <img className={styles.icon} src={restartIcon}/>
        </button>
    )
}

export default Restart;