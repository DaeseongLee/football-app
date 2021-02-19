import React from 'react';
import styles from './userPannel.module.css';
import { GiBabyfootPlayers } from 'react-icons/gi';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import { useHistory } from 'react-router-dom';

const UserPannel = (props) => {
    const history = useHistory();
    console.log('history', history);
    return (
        <div className={styles.userPannel}>
            <div className={styles.head}>
                <div className={styles.logo}>
                    <GiBabyfootPlayers />
                </div>
                <span className={styles.title}>Football App</span>
            </div>
            <div className={styles.userInfo}>
                <Image src="holder.js/171x180" roundedCircle />

                <Dropdown>
                    <Dropdown.Toggle
                        style={{ background: 'transparent', border: '0px' }}
                        id="dropdown-basic">
                        Lee
                </Dropdown.Toggle>

                    <Dropdown.Menu style={{ display: 'flex', flexDirection: 'column' }} >
                        <Dropdown.Item>Profile Upload</Dropdown.Item>
                        <Dropdown.Item>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div >
    )
};

export default UserPannel;