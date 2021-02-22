import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import { useForm } from 'react-hook-form';

const Login = ({ authentication }) => {

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        const errorMsg = await authentication.login(data);

        if (errorMsg) {
            setErrorMsg(errorMsg);
        }
        setLoading(false);


        setTimeout(() => setErrorMsg(''), 5000);
    }


    return (
        <section className={styles.login}>
            <h2 className={styles.title}>Login</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.label}>Email</label>
                <input name="email" type="email" className={styles.input} ref={register({ required: true })} />
                {errors.email && errors.email.type === 'required' && <p className={styles.p}>Email is required</p>}
                <input name="password" type="password" className={styles.input} ref={register({ required: true, minLength: 6 })} />
                {errors.password && errors.password.type === 'required' && <p className={styles.p}>Password is required</p>}
                <input type="submit" className={styles.input} value="Login" disabled={loading} />
                {errorMsg && <p>{errorMsg}</p>}
                <Link style={{ textDecoration: 'none' }} to='/register'>{<p className={styles.link}> 만약 회원가입 안했다면...</p>}</Link>
            </form>
        </section >
    )
};

export default Login;

