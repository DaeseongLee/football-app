import React from 'react';
import styles from './sidePannel.module.css';

import { useHistory } from 'react-router-dom';
import DirectMessage from './directMessage/directMessage';
import RoomPannel from './roomPannel/roomPannel';
import UserPannel from './userPannel/userPannel';
const SidePannel = (props) => {
    const history = useHistory();
    console.log("history", history);
    return (
        <div className={styles.sidePannel}>
            <UserPannel />

            <RoomPannel />

            <DirectMessage />
        </div>
    )
};

export default SidePannel;