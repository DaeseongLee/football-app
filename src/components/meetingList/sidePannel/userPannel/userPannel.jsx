import React, { useRef, useState } from 'react';
import styles from './userPannel.module.css';
import { GiBabyfootPlayers } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import { useHistory } from 'react-router-dom';
import mime from 'mime-types';

const UserPannel = ({ authentication, database, store }) => {
    const history = useHistory();
    const inputRef = useRef();
    const [user, setUser] = useState(history.location.state.user);
    const [loading, setLoading] = useState(false);
    console.log("userPannel", user);
    console.log('history', history);

    const handleUploadFile = async (event) => {
        const file = event.target.files[0];
        const metadata = { contentType: mime.lookup(file.name) };
        let newState = {};
        try {
            setLoading(true);
            //store에 저장
            let uploadFile = await store.upload(`user_image/${user.uid}`, file, metadata);
            console.log('uploadFile', uploadFile);
            let downLoadURL = await uploadFile.ref.getDownloadURL();
            console.log('downLoadURL', downLoadURL);

            console.log("historyState", history.location.state);
            //auth fileUrl 업데이트
            let updateUser = await authentication.uploadProfile(downLoadURL);
            console.log('updateUser', updateUser);

            //database fileUrl 업데이트
            database.update("users", user.uid, downLoadURL);

            setLoading(false);
            newState = { ...user, photoURL: downLoadURL };
        } catch (error) {
            alert(error);
        } finally {
            setUser(newState);
            history.push({
                pathname: '/list',
                state: { "user": newState }
            })
        }
    }

    const handleOpenImageRef = () => {
        if (loading === false) inputRef.current.click();
    };

    const handleLogout = () => {
        if (loading === false) authentication.logout();
    };


    return (
        <div className={styles.userPannel}>
            <div className={styles.head}>
                <div className={styles.logo}>
                    <GiBabyfootPlayers />
                </div>
                <span className={styles.title}>Football App</span>
            </div>
            <div className={styles.userInfo}>
                <FaUser style={{ marginRight: '0.5em' }} />
                <Image src={user && user.photoURL}
                    style={{ width: '30px', height: '30px', marginTop: '3px' }}
                    roundedCircle />

                <Dropdown>
                    <Dropdown.Toggle
                        style={{ background: 'transparent', border: '0px' }}
                        id="dropdown-item-button">
                        {user && user.displayName}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ display: 'flex', flexDirection: 'column' }} >
                        <Dropdown.Item onClick={handleOpenImageRef}>Profile Upload</Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <input type="file"
                accept="image/jpeg, image/png"
                className={styles.inputFile}
                ref={inputRef}
                onChange={handleUploadFile}
            ></input>
        </div >
    )
};

export default UserPannel;