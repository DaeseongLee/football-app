import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MainHeader from './mainHeader/mainHeader';
import styles from './mainPannel.module.css';
const MainPannel = ({ current }) => {

    return (
        <div className={styles.mainPannel}>
            <MainHeader current={current} />
        </div>
    )
};

export default MainPannel;