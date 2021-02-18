import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './sidePannel.module.css';
const SidePannel = (props) => {
    const history = useHistory();
    console.log("history", history);
    return (
        <div className={styles.sidePannel}>
            SidePannel
        </div>
    )
};

export default SidePannel;