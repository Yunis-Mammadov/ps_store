import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styles from '../Login/index.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email.trim() !== '' && password.trim() !== '' ) {
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className={styles.parentLogin}>
                <form className={styles.formLogin} onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <div>
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
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className={styles.loginButtons}>
                        <div className={styles.signIn}>
                            <button
                                type="submit"
                                className={`${styles.signInButton} ${email.trim() === '' || password.trim() === '' ? styles.disabledButton : ''}`}
                                disabled={email.trim() === '' || password.trim() === '' }
                            >
                                Sign In
                            </button>
                        </div>
                        <div>
                            <button onClick={() => {
                                window.location.href = "register";
                            }} style={{
                                padding: "10px 100px"
                            }}>Create New Account</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
