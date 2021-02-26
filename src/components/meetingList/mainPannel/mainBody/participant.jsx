import React from 'react';
import styles from './participant.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
const Participant = ({ participant, addParticipant, duplicate }) => {
    const check = participant ? styles.full : styles.empty;
    const dup = duplicate ? styles.dup : styles.nodup;

    return (
        <div className={`${styles.participant} ${check}`}>
            {participant ? <span style={{ fontSize: '1rem' }}>{participant.displayName}</span> :
                <div className={`${styles.plus} ${dup}`}><FaPlus style={{ cursor: 'pointer', color: 'black', width: '100%' }} onClick={addParticipant} /></div>
            }
        </div >
    )
};

export default Participant;