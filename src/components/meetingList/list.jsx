import React, { useState } from 'react';
import styles from './list.module.css';
import MainPannel from './mainPannel/mainPannel';
import SidePannel from './sidePannel/sidePannel';
const List = ({ authentication, database, store }) => {
    const [current, setCurrentRoom] = useState({});

    const handleCurrentRoom = (room) => setCurrentRoom(room);
    return (
        <div className={styles.list}>
            <SidePannel authentication={authentication} database={database} store={store} handleCurrentRoom={handleCurrentRoom} />
            <MainPannel current={current} />
        </div>
    )
};

export default List;