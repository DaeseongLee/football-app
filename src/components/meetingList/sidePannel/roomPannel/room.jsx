import React from 'react';
import styles from './room.module.css';
const Room = ({ room, onChange, activeChatroomId }) => {
    const handleOnclick = () => onChange(room);
    const active = room.id === activeChatroomId ? styles.active : styles.none;

    return (
        <li onClick={handleOnclick} className={`${styles.room} ${active}`}>
            #{room.date}
        </li>
    )
};

export default Room;