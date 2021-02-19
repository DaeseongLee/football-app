import React from 'react';
import styles from './list.module.css';
import MainPannel from './mainPannel/mainPannel';
import SidePannel from './sidePannel/sidePannel';
const List = ({ authentication }) => {
    return (
        <div className={styles.list}>
            <SidePannel authentication={authentication} />
            <MainPannel />
        </div>
    )
};

export default List;