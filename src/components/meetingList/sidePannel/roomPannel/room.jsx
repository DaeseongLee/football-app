import React from 'react';
import styles from './room.module.css';
const Room = ({ room, onChange }) => (
    <li onClick={onChange} className={styles.room}>
        #{room.date}
    </li>
);

export default Room;