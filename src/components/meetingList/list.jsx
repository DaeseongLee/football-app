import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './list.module.css';
const List = (props) => {
    const history = useHistory();
    console.log(history);
    return (
        <h2>List</h2>
    )
};

export default List;