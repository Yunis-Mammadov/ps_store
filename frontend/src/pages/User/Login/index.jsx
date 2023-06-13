import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styles from '../Login/index.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '') {
            // Formu göndermek için istediğiniz işlemleri burada gerçekleştirin
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirm_password') {
            setConfirmPassword(value);
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
                        <div className={styles.sonyLogo}>
                            <img src="https://media.direct.playstation.com/is/image/sierialto/sony-logo@3x?$Icons$" alt="" />
                        </div>
                        <div>
                            <img src="https://my.account.sony.com/central/signin/9fe91826ca150e7fa133749535fa2ed86e5c1b70/assets/images/logo_playstation.png" alt="" />
                        </div>
                    </div>
                    <label style={{ fontSize: '15px', marginTop: '10px' }}>
                        Sign in to PlayStation with one of your Sony account
                    </label>
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
                        <div>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirm_password"
                                value={confirmPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className={styles.buttonAndLink}>
                        <div>
                            <button
                                type="submit"
                                className={`${styles.loginButton} ${email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' ? styles.disabledButton : ''}`}
                                disabled={email.trim() === '' || password.trim() === '' || confirmPassword.trim() === ''}
                            >
                                Sign In
                            </button>
                        </div>
                        <div>
                            <a href="">ACCOUNT VAR?</a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
