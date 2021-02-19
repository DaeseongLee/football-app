import React from 'react';
import styles from './list.module.css';
import MainPannel from './mainPannel/mainPannel';
import SidePannel from './sidePannel/sidePannel';
const List = ({ authentication, database, store }) => {
    return (
        <div className={styles.list}>
            <SidePannel authentication={authentication} database={database} store={store} />
            <MainPannel />
        </div>
    )
};

export default List;