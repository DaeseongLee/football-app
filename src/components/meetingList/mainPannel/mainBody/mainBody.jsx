import React, { useState, useEffect } from 'react';
import styles from './mainBody.module.css';
import Participant from './participant';
import Button from 'react-bootstrap/Button';
const MainBody = ({ user, current, database }) => {
    const { id: roomId } = current || {};
    const [participant, setParticipant] = useState({});
    const [duplicate, setDuplicate] = useState(false);
    const [exitBtnEnable, setExitBtnEnable] = useState(true);

    useEffect(() => {
        if (!roomId) {
            return;
        }
        setParticipant({});
        setExitBtnEnable(true);
        const stop = database.syncParticipant(roomId, (participants) => {
            setParticipant(participants);
            setDuplicate(false);

            if (participants) {
                const index = Object.keys(participants).findIndex(id => id === user.uid);
                if (index > -1) {
                    setDuplicate(true);
                    setExitBtnEnable(false);
                }
            }
        });
        return () => stop();

    }, [current])

    const addParticipant = () => {
        if (!duplicate) {
            setExitBtnEnable(false);
            database.addParticipant(roomId, user)
        };
    }

    const render = (participant, current) => {
        let newArray = [];
        if (participant) {
            let participantArray = Object.keys(participant);
            for (let i = 0; i < current.number; i++) {
                if (participantArray.length > 0) {
                    newArray.push(participantArray.shift());
                } else {
                    newArray.push(i);
                }
            }

        } else {
            for (let i = 0; i < current.number; i++) {
                newArray.push(i);
            }
        }
        return (
            newArray.map((a, i) => <Participant key={i} participant={participant && participant[a]} addParticipant={addParticipant} duplicate={duplicate} />)
        )
    }
    const handleExit = () => {
        setParticipant(participant => {
            const update = { ...participant };
            delete update[user.uid];
            return update;
        })
        setExitBtnEnable(true);
        database.removeParticipant(user.uid, roomId);
    }
    return (
        <div>
            <div className={styles.button}>
                <Button variant="outline-success" disabled={exitBtnEnable} onClick={handleExit}>나가기</Button>
            </div>
            <ul className={styles.mainBody}>
                {current && render(participant, current)}
            </ul>
        </div>

    )
};

export default MainBody;