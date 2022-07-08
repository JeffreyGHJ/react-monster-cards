import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { setPlayerLevel, setUsername } from "./player-slice";
import useGameManager from "../hooks/use-game-manager";
import useDatabase from "../hooks/use-database";

const ISBROWSER = !(typeof window === 'undefined');
let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    uid: '',
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
    if (ISBROWSER) {    // localStorage only exists for the browser
        const storedToken = localStorage.getItem('token');
        const storedUid = localStorage.getItem('uid');
        const storedExpirationDate = localStorage.getItem('expirationTime'); 
        const remainingTime =  calculateRemainingTime(storedExpirationDate);

        // if the user has less than ... left on their last token, dont use that token anymore
        if ( remainingTime <= 60000 ) {     
            localStorage.removeItem('token');
            localStorage.removeItem('expirationTime');
            localStorage.removeItem('uid');
            return null;
        }

        return {
            token: storedToken,
            duration: remainingTime,
            uid: storedUid,
        }
    } 
    return null;
}

export const AuthContextProvider = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { loadPlayer } = useDatabase();
    const { initializeBattle, updateGameStatus } = useGameManager();

    let tokenData;
    let initialToken;
    let initialUid;

    console.log("AUTH CTX RERENDER");

    useEffect(() => {
        if (ISBROWSER) {
            console.log("ATTEMPTING TO RETRIEVE STORED TOKEN");
            tokenData = retrieveStoredToken();
            if (tokenData) {
                console.log("TOKEN FOUND IN LOCAL STORAGE");
                initialToken = tokenData.token;
                initialUid = tokenData.uid;
            }
        }
    }, [])

    const [token, setToken] = useState(initialToken);   // undefined if no previous token in storage
    const [uid, setUid] = useState(initialUid);

    useEffect(() => {
        if (tokenData) {
            console.log("token data updated, setting token");
            console.log(tokenData);
            setToken(tokenData.token);
            setUid(tokenData.uid);
            // load player data from server
            console.log('calling loadPlayer hook from useEffect');
            loadPlayer(tokenData.uid);
        }
    }, [tokenData]);
 
    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {           // useCallback to prevent infinite loop in useEffect
        console.log("logging out");
        setToken(null);
        setUid(null);
        dispatch(setPlayerLevel(1));
        if (ISBROWSER) {
            localStorage.removeItem('token');
            localStorage.removeItem('expirationTime');
            localStorage.removeItem('uid');
        }

        if ( logoutTimer ) {
            clearTimeout(logoutTimer);
        }

        // CLEAR OUT REDUX STATE RELATED TO THIS ACCOUNT
        dispatch(setUsername('Guest'));
        initializeBattle();
        updateGameStatus('playing');


        router.replace('/');
    }, []);

    async function loginHandler(token, expirationTime, localId) {
        console.log("LOGIN HANDLER CALLED!");
        setToken(token);
        setUid(localId);

        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer = setTimeout(logoutHandler, remainingTime);

        if (ISBROWSER) { 
            localStorage.setItem('token', token);
            localStorage.setItem('expirationTime', expirationTime);
            localStorage.setItem('uid', localId);
        }

        // load player data from server
        console.log('calling loadPlayer hook from loginHandler');
        await loadPlayer(localId); 
        initializeBattle();
        updateGameStatus('playing');
    };

    useEffect(() => {   // this sets a timer if there was a stored token
        if (tokenData) {
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        uid: uid,
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