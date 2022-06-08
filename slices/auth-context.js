import React, { useCallback, useEffect } from "react";
import { useState } from "react";

export const API_KEY = 'AIzaSyDtaLkz4b5br6bC7ss6DNmF2zn243qllP0';
export const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY;
export const LOGIN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY;

const ISBROWSER = !(typeof window === 'undefined');

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
}

const retrieveStoredToken = () => {
    if (ISBROWSER) {
        const storedToken = localStorage.getItem('token');
        const storedExpirationDate = localStorage.getItem('expirationTime');
        const remainingTime =  calculateRemainingTime(storedExpirationDate);

        // if the user has less than an hour left on their last token, dont use that token anymore
        if ( remainingTime <= 60000 ) {     
            localStorage.removeItem('token');
            localStorage.removeItem('expirationTime');
            return null;
        }

        return {
            token: storedToken,
            duration: remainingTime,
        }
    } 
    return null;
}

export const AuthContextProvider = (props) => {
    let initialToken;
    let tokenData;

    if (ISBROWSER) {
        tokenData = retrieveStoredToken();
        if (tokenData) {
            initialToken = tokenData.token;
        }
    }
    
    const [token, setToken] = useState(initialToken);   // undefined if no previous token in storage

    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {           // useCallback to prevent infinite loop in useEffect
        console.log("logging out");
        setToken(null);
        if (ISBROWSER) {
            localStorage.removeItem('token');
            localStorage.removeItem('expirationTime');
        }

        if ( logoutTimer ) {
            clearTimeout(logoutTimer);
        }
    }, []);

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        if (ISBROWSER) {
            localStorage.setItem('token', token);
            localStorage.setItem('expirationTime', expirationTime);
        }
        
        const remainingTime = calculateRemainingTime(expirationTime);

        logoutTimer = setTimeout(logoutHandler, remainingTime);
    };

    useEffect(() => {   // this sets a timer if there was a stored token too
        if (tokenData) {
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;