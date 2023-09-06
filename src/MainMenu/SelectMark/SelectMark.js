import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import styles from './styles.module.css';
import icons from './icons';
import {motion} from 'framer-motion';


function SelectMark() {
    const mark = useSelector(state => state.playerOneMark);
    const dispatch = useDispatch();

    const handleMark = (e) => {
        const markSelected = e.target.getAttribute('data-id');
        dispatch({type: 'UPDATE_MARK', mark: markSelected});
    }

    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                PICK PLAYER 1'S MARK
            </h1>
            <div className={styles.selectMark}>
                {mark === 'x' && <motion.div layoutId='mark' className={styles.selectedXBackground}/>}
                {mark === 'o' && <motion.div layoutId='mark'className={styles.selectedOBackground}/>}
                    <button className={styles.xButton} onClick={handleMark} data-id='x'>
                        <motion.img className={styles.icons} src={mark === 'x' ? icons['xIconSelected'] : icons['xIcon']}/>
                    </button>
                    <button className={styles.oButton} onClick={handleMark} data-id='o'>
                        <motion.img className={styles.icons} src={mark === 'o' ? icons['oIconSelected'] : icons['oIcon']}/>
                    </button>
            </div>
            <h2 className={styles.message}>
                REMEMBER : X GOES FIRST
            </h2>
        </section>
    )
}

export default SelectMark;