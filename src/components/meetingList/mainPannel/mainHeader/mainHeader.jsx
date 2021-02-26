import styles from './mainHeader.module.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const MainHeader = ({ current }) => {

    const { date, sTime, eTime, location, number, account, createBy } = current || {}

    return (
        <div className={styles.mainHeader}>
            <div className={styles.firstLine}>
                <div><span className={styles.title}>날짜: </span> <span className={styles.result}>{date}</span></div>
                <div><span className={styles.title}>시작시간: </span> <span className={styles.result}>{sTime}</span></div>
                <div><span className={styles.title}>종료시간: </span><span className={styles.result}>{eTime}</span></div>
            </div>
            <div className={styles.secondLine}>
                <div><span className={styles.title}>장소: </span> <span className={styles.result}>{location}</span></div>
                <div><span className={styles.title}>인원: </span> <span className={styles.result}>{number}</span></div>
                <div><span className={styles.title}>계좌번호: </span><span className={styles.result}>{account}</span></div>
            </div>
        </div >
    )
};

export default MainHeader;