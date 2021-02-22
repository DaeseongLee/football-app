import React from 'react';
import styles from './room.module.css';
const Room = ({ room, onChange }) => {
    console.log("room", room)
    return (
        <li onClick={onChange} className={styles.room}>
            #{room.date}
        </li>
    )
};

export default Room;