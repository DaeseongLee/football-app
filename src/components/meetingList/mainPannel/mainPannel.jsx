import React, { useEffect } from 'react';
import MainBody from './mainBody/mainBody';
import MainHeader from './mainHeader/mainHeader';
import styles from './mainPannel.module.css';
const MainPannel = ({ user, current, database }) => {

    return (
        <div className={styles.mainPannel}>
            <MainHeader current={current} />
            <MainBody user={user} current={current} database={database} />
        </div>
    )
};

export default MainPannel;