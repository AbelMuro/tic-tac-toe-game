import React, {useEffect} from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';
import marks from './marks'

function Tile() {
    const turn = useSelector(state => state.turn);

    const handleEnter = (e) => {
        const mark = e.target.firstElementChild;
        mark.src = turn === 'x' ? marks['hoverIconX'] : marks['hoverIconO'];
    }

    const handleLeave = (e) => {
        const mark = e.target.firstElementChild;
        mark.src = '';
    }


    useEffect(() => {

    }, [])

    return(
        <div className={styles.container} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img className={styles.mark} />
        </div>
    )
}

export default Tile;