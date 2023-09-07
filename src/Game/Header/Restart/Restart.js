import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import restartIcon from './icons';


///this is where i left off i will need to work on the responsiveness
function Restart() {
    const dispatch = useDispatch();

    const handleRestart = () => {
        dispatch({type: 'RESTART'});
    }

    return(
        <>
            <button className={styles.container} onClick={handleRestart}>
                <img className={styles.icon} src={restartIcon}/>
            </button>     
            <div className={styles.overlay}>
                <dialog open={true} className={styles.dialog}>
                    <h1 className={styles.title}>
                        restart game
                    </h1>
                    <button className={styles.cancel}>
                        no, cancel
                    </button>
                    <button className={styles.restart}>
                        yes, restart
                    </button>                        
                </dialog>
            </div>   
        </>

    )
}

export default Restart;