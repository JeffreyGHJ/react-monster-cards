import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import classes from './AuthForm.module.css';
import useAuth from '../../hooks/use-auth';
import AtSignSvg from '../../public/assets/icons/AtSignSvg.js';
import LockSvg from '../../public/assets/icons/LockSvg';

const AuthForm = (props) => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLoginMode, setIsLoginMode] = useState(useRouter().query.signup ? false : true);

    const { isLoading, sendRequest: authenticateUser } = useAuth();

    const switchAuthModeHandler = () => {
        setIsLoginMode((prevMode) => {
            return !prevMode;
        });
    }

    const submitHandler = (event) => {
        console.log("Beginning user authentication...");
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        authenticateUser(isLoginMode, enteredEmail, enteredPassword);
    }

    return (
        <div>
            <div className={classes.container}>
                <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={submitHandler}>
                    <div className={classes.inputs}>
                        <div className={classes['input-group']}>
                            <div className={classes['input-decoration-outter']}>
                                <div className={classes['input-decoration']}>
                                    <AtSignSvg height="80%" width="80%" />
                                </div>
                            </div>
                            <input id='email' type='email' placeholder='Email' ref={emailInputRef}></input>
                        </div>
                        <div className={classes['input-group']}>
                            <div className={classes['input-decoration']}>
                                <LockSvg height="80%" width="80%" />
                            </div>
                            <input id='password' type='password' placeholder='Password' ref={passwordInputRef}></input>
                        </div>
                        {!isLoading && <button className={classes.button}>
                            {isLoginMode ? 'Login' : 'Create Account'}
                        </button>}
                        {isLoading && <p>Sending request...</p>}
                    </div>
                    <button type='button' onClick={switchAuthModeHandler} className={classes.toggle}>
                        {isLoginMode ? 'Create new account' : 'Login existing user'}
                    </button>
                </form>
            </div>
        </div>
    );

};

export default AuthForm;

