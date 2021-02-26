import React from 'react';
import styles from './sidePannel.module.css';
import RoomPannel from './roomPannel/roomPannel';
import UserPannel from './userPannel/userPannel';
const SidePannel = ({ authentication, database, store, user, handleUser, handleCurrentRoom }) => {
    return (
        <div className={styles.sidePannel}>
            <UserPannel authentication={authentication} database={database} store={store} user={user} handleUser={handleUser} />

            <RoomPannel database={database} user={user} handleCurrentRoom={handleCurrentRoom} />
        </div>
    )
};

export default SidePannel;