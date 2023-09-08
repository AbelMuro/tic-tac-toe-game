import React, {memo} from 'react';
import { motion } from 'framer-motion';
import CurrentTurn from './CurrentTurn';
import Restart from './Restart';
import icons from './icons';
import styles from './styles.module.css';

function Header({variants}){
    return(            
        <motion.header className={styles.headerBar} variants={variants}>
            <img className={styles.logo} src={icons['logo']}/>
            <CurrentTurn/>  
            <Restart />              
        </motion.header>
    )
}

export default memo(Header);