import React, {useState, useEffect, useRef} from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import restartIcon from './icons';


function Restart() {
    const [open, setOpen] = useState(false);
    const overlayRef = useRef();
    const dialogRef = useRef();
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleRestart = () => {
        setOpen(false);
        dispatch({type: 'RESTART'});
    }

    useEffect(() => {
        if(open){
            overlayRef.current.style.display = 'flex';
            setTimeout(() => {
                overlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                dialogRef.current.style.transform = 'scaleY(1)';
            }, 10)
        }
        else{
            overlayRef.current.style.backgroundColor = '';
            dialogRef.current.style.transform = '';            
            setTimeout(() => {
                overlayRef.current.style.display = '';
            }, 200)
        }

    }, [open])

    return(
        <>
            <button className={styles.container} onClick={handleOpen}>
                <img className={styles.icon} src={restartIcon}/>
            </button>     
            <div className={styles.overlay} ref={overlayRef}>
                <dialog open={open} className={styles.dialog} ref={dialogRef}>
                    <h1 className={styles.title}>
                        restart game?
                    </h1>
                    <button className={styles.cancel} onClick={handleOpen}>
                        no, cancel
                    </button>
                    <button className={styles.restart} onClick={handleRestart}>
                        yes, restart
                    </button>                        
                </dialog>
            </div>   
        </>

    )
}

export default Restart;