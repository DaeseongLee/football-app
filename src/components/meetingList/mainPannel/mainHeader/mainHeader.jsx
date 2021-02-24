import styles from './mainHeader.module.css';
import Table from 'react-bootstrap/Table';


import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const MainHeader = ({ current }) => {


    const history = useHistory().location.state;
    // const { sTime, eTime, location, number, account, createBy } = current;

    console.log(current);
    console.log('histtt', history.currentRoom);

    useEffect(() => {
        return () => {

        }
    }, [])

    return (
        <div className={styles.mainHeader}>
            <Table style={{ margin: '0' }} striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>날짜</th>
                        <th>시작시간</th>
                        <th>종료시간</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
            <Table style={{ margin: '0' }} striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>장소</th>
                        <th>인원</th>
                        <th>계좌번호</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )
};

export default MainHeader;