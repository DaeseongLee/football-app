import React, { useRef, useState } from 'react';
import styles from './register.module.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = ({ authentication }) => {

    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const { register, watch, errors, handleSubmit } = useForm();
    const password = useRef();
    password.current = watch('password');

    const onSubmit = (data) => {
        setLoading(true);
        authentication.register(data).then(
            errorMsg => {
                console.log(errorMsg);
                if (errorMsg) {
                    setErrorMsg(errorMsg);
                }
                setLoading(false);
            }
        );
        setTimeout(() => setErrorMsg(''), 5000);
    }
    return (
        <section className={styles.register}>
            <h2 className={styles.title}>Register</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.label}>Email</label>
                <input name="email" type="email" className={styles.input} ref={register({ required: true })} />
                {errors.email && errors.email.type === 'required' && <p className={styles.p}>Email is required</p>}
                <label className={styles.label}>Name</label>
                <input name="name" className={styles.input} ref={register({ required: true, maxLength: 6 })} />
                {errors.name && errors.name.type === 'required' && <p className={styles.p}>Name is required</p>}
                {errors.name && errors.name.type === 'maxLength' && <p className={styles.p}>Name must not exceed 6</p>}
                <label className={styles.label}>Password</label>
                <input name="password" type="password" className={styles.input} ref={register({ required: true, minLength: 6 })} />
                {errors.password && errors.password.type === 'required' && <p className={styles.p}>Password is required</p>}
                {errors.password && errors.password.type === 'minLength' && <p className={styles.p}>Password is at least 6 characters</p>}
                <label className={styles.label}>Password Confirm</label>
                <input name="password_confirm" type="password" className={styles.input} ref={register({ required: true, validate: value => value === password.current })} />
                {errors.password_confirm && errors.password_confirm.type === 'required' && <p className={styles.p}>Password Confirm is required</p>}
                {errors.password_confirm && errors.password_confirm.type === 'validate' && <p className={styles.p}>Passwords Confirm do not match</p>}
                {errorMsg && <p>{errorMsg}</p>}
                <input disabled={loading} type="submit" className={styles.input} value="register" />
                <Link to={"/"} style={{ textDecoration: 'none' }}>{<p className={styles.link}> 이미 아이디가 있다면... </p>}</Link>
            </form>
        </section >
    )
};

export default Register;

