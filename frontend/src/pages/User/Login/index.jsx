import { Helmet } from 'react-helmet';
import styles from '../Login/index.module.css';
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../../context/UserContext';
import { useNavigate } from "react-router-dom"
import { signIN } from '../../../api/request';
import Swal from 'sweetalert2';
import { useFormik} from 'formik';


const Login = () => {
    
    const handleSubmit = async (values, actions) => {
        const response = await signIN(values);
        console.log(response);
        actions.resetForm();
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleSubmit
    })

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className={styles.parentLogin}>
                <form className={styles.formLogin} onSubmit={formik.handleSubmit}>
                    <div>
                        <div>
                            <div className={styles.logoContainer}>
                                <CloseIcon className={styles.closeIcon} onClick={() => {
                                    window.location.href = "http://localhost:3000"
                                }} />
                                <img src="https://my.account.sony.com/central/signin/9fe91826ca150e7fa133749535fa2ed86e5c1b70/assets/images/logo_playstation.png" alt="" />
                            </div>
                        </div>
                        <label className={styles.loginLabel}>
                            Sign in to PlayStation with one of your Sony account
                        </label>
                    </div>
                    <div className={styles.loginInput}>
                        <div>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                        </div>
                    </div>
                    <div className={styles.loginButtons}>
                        <div className={styles.signIn}>
                            <button
                                type="submit"
                                className={styles.signInButton} 
                            >
                                Sign In
                            </button>
                        </div>
                        <div>
                            <button onClick={() => {
                                window.location.href = "register";
                            }} className={styles.loginToRegister}>Create New Account</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
