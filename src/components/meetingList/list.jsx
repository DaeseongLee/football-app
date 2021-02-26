import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './list.module.css';
import MainPannel from './mainPannel/mainPannel';
import SidePannel from './sidePannel/sidePannel';
const List = ({ authentication, database, store }) => {
    const history = useHistory().location.state;
    const [user, setUser] = useState(history && history.user);
    const [current, setCurrentRoom] = useState({});
    const handleCurrentRoom = (room) => setCurrentRoom(room);
    const handleUser = (update) => setUser(update);
    return (
        <div className={styles.list}>
            <SidePannel authentication={authentication} database={database} store={store} user={user} handleUser={handleUser}
                handleCurrentRoom={handleCurrentRoom} />
            <MainPannel user={user} current={current} database={database} />
        </div>
    )
};

export default List;