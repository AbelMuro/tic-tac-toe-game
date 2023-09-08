import React, {useEffect} from 'react';
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import SelectMark from './SelectMark';
import logo from './icons';

function MainMenu() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const variants = {
        hidden: {
            scale: 0
        },
        show: {
            scale: 1,
            transition: {type: 'spring', stiffness: 150, damping: 6}
        }
    }

    const playAgainstCPU = () => {
        dispatch({type: 'UPDATE_PLAYER', against: 'cpu'})
        navigate('/game')
    }

    const playAgainstPlayer = () => {
        dispatch({type: 'UPDATE_PLAYER', against: 'player'})
        navigate('/game')
    }

    //just in case the player clicks on the 'go back' button, this will reset the global state
    useEffect(() => {
        dispatch({type:'RESTART'});
    }, [])

    return(
        <motion.div className={styles.container} initial={'hidden'} animate={'show'} transition={{staggerChildren: 0.6}}>
            <motion.img className={styles.logo} src={logo} variants={variants}/>
            <SelectMark variants={variants}/>
            <motion.button className={styles.cpuButton} onClick={playAgainstCPU} variants={variants}>
                New Game (vs cpu)
            </motion.button>
            <motion.button className={styles.playerButton} onClick={playAgainstPlayer} variants={variants}>
                New Game (vs player)
            </motion.button>
        </motion.div>
    )
}

export default MainMenu;