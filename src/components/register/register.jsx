import React from 'react';
import styles from './register.module.css';
import { useForm } from 'react-hook-form';

const Register = (props) => {
    const { register, watch, errors, handleSubmit } = useForm();
    console.log(watch('phoneNumber'));

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <section className={styles.register}>
            <h2 className={styles.title}>Register</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.label}>PhoneNumber</label>
                <input name="phoneNumber" type="number" className={styles.input} ref={register({ required: true, maxLength: 11 })} />
                {errors.phoneNumber && errors.phoneNumber.type === 'required' && <p className={styles.p}>PhonewNumber is required</p>}
                {errors.phoneNumber && errors.phoneNumber.type === 'maxLength' && <p className={styles.p}>PhonewNumber must not exceed 11</p>}
                {errors.phoneNumber && errors.phoneNumber.type === 'valueAsNumber' && <p className={styles.p}>PhonewNumber must be a Number</p>}
                <label className={styles.label}>Name</label>
                <input name="name" className={styles.input} ref={register({ required: true, maxLength: 6 })} />
                {errors.name && errors.name.type === 'required' && <p className={styles.p}>Name is required</p>}
                {errors.name && errors.name.type === 'maxLength' && <p className={styles.p}>Name must not exceed 11</p>}
                <input type="submit" className={styles.input} value="register" />
            </form>
        </section >
    )
};

export default Register;
