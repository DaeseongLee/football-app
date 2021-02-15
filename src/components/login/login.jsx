import React from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';

const Login = (props) => (
    <section className={styles.login}>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.form}>
            <label className={styles.label}>PhoneNumber</label>
            <input name="phoneNumber" type="tel" className={styles.input} />
            <input type="submit" className={styles.input} value="Login" />
            <Link style={{ opacity: '0.8', fontSize: '0.5rem', textAlign: 'left', color: 'white', textDecoration: 'none' }} to='/register'>만약 회원가입 안했다면...</Link>
        </form>
    </section >
);

export default Login;