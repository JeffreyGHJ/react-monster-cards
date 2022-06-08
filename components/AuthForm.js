import { useRef, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext, { LOGIN_URL, SIGN_UP_URL } from '../slices/auth-context';
import classes from './AuthForm.module.css'

const AuthForm = ( props ) => {
    const router = useRouter();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLoginMode, setIsLoginMode] = useState(true); 
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLoginMode((prevMode) => {
            return !prevMode;
        });
    }

    const submitHandler = ( event ) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        // To-Do: Validate email @ password inputs

        setIsLoading(true);
        let url;
        if ( isLoginMode ) {    // Login mode
            url = LOGIN_URL;
        } else {                // Signup mode
            url = SIGN_UP_URL;
        }

        fetch( url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            setIsLoading(false);
            if (res.ok) {   // Return expected json
                return res.json();
            } else {        // Gather error report
                return res.json().then(data => {
                    let errorMessage = 'Authentication Failed! (Default)';
                    if ( data && data.error && data.error.message ) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage);
                });
            }
        })
        .then((data) => {   // Use successful Login json data
            const expirationTime = new Date( new Date().getTime() + (+data.expiresIn * 1000) );
            authCtx.login(data.idToken, expirationTime.toISOString());
            router.replace('/');
        })
        .catch((err) => {   // Show error
            alert(err.message);
        });        
        
    }

    return (
        <div>
            <div className={classes.container}>
                <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={submitHandler}>
                    <div className={classes.inputs}>
                        <div className={classes['input-group']}>
                            <label htmlFor='email'>Email</label>
                            <input id='email' type='email' placeholder='Email' ref={emailInputRef}></input>
                        </div>
                        <div className={classes['input-group']}>
                            <label htmlFor='password'>Password</label>
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