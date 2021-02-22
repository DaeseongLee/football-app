import React from 'react';
import styles from './sidePannel.module.css';

import { useHistory } from 'react-router-dom';
import DirectMessage from './directMessage/directMessage';
import RoomPannel from './roomPannel/roomPannel';
import UserPannel from './userPannel/userPannel';
const SidePannel = ({ authentication, database, store }) => {
    return (
        <div className={styles.sidePannel}>
            <UserPannel authentication={authentication} database={database} store={store} />

            <RoomPannel database={database} />

            <DirectMessage />
        </div>
    )
};

export default SidePannel;