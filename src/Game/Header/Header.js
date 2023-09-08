import React, {memo} from 'react';
import CurrentTurn from './CurrentTurn';
import Restart from './Restart';
import icons from './icons';
import styles from './styles.module.css';

function Header(){
    return(            
        <header className={styles.headerBar}>
            <img className={styles.logo} src={icons['logo']}/>
            <CurrentTurn/>  
            <Restart/>              
        </header>
    )
}

export default memo(Header);