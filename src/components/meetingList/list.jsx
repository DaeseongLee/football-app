import React from 'react';
import styles from './list.module.css';
import MainPannel from './mainPannel/mainPannel';
import SidePannel from './sidePannel/sidePannel';
const List = (props) => {
    return (
        <div className={styles.list}>
            <SidePannel />
            <MainPannel />
        </div>
    )
};

export default List;