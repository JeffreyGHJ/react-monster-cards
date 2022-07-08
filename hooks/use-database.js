import { useRouter } from "next/router";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import AuthContext from "../slices/auth-context";
import { setPlayerLevel, setUsername } from "../slices/player-slice";
import { setError } from '../slices/error-modal-slice';
import { setNotification } from "../slices/notification-slice";


const useDatabase = () => {
    const authCtx = useContext(AuthContext);
    const dispatch = useDispatch();
    const router = useRouter();

    const loadPlayer = async (uid) => {
        console.log("sending loadPlayer request in 'useDatabase' hook:");
        try {
            const response = await fetch('/api/load-player-data', {
                method: 'POST',
                body: JSON.stringify({
                    uid
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            let responseData = await response.json();
            console.log(response);
            if (!response.ok) {
                console.log('error in response..');
                let errorObj = {
                    status: response.status,
                    statusText: response.statusText,
                    message: responseData.error || 'Error'
                }
                dispatch(setError(errorObj));
                let notif = {
                    status: 'error',
                    title: 'Login Error',
                    message: 'Could not load player details from database'
                }
                dispatch(setNotification(notif));
                throw new Error(responseData.error.message);
            } else {
                let notif = {
                    status: 'success',
                    title: 'Logged in',
                    message: 'Successfully loaded player details from database'
                }
                dispatch(setNotification(notif));
                console.log("fetched player data: ");
                console.log(responseData);
                console.log(responseData.playerLevel);
                if (responseData.playerLevel) {   // Validate that it is a number
                    dispatch(setPlayerLevel(responseData.playerLevel));
                }
                if (responseData.username) {
                    dispatch(setUsername(responseData.username));
                } else {
                    dispatch(setUsername('Anonymous'));
                }
            }
        } catch (error) {
            console.log(error);
            //alert(error);
        }
    };

    // This should be changed once the db grows
    // all users should not be able to trigger this at any time
    // make the server call this periodically every 5min or so 
    // users should only be able get the most recently generated results of getAllPlayers
    const getAllPlayers = async () => {
        console.log("Attempting to load all players");
        try {
            const response = await fetch('/api/get-all-players');   // go up to the api route
            let responseData = await response.json();
            console.log(response);
            console.log(responseData);

            if (!response.ok) {
                console.log('error in response');
                console.log(response.status);
                console.log(response.statusText);   
                console.log(responseData.error);    // rtdb errors do not have message prop
                let errorObj = {
                    status: response.status,
                    statusText: response.statusText,
                    message: responseData.error || 'Error'
                }
                dispatch(setError(errorObj));
                throw new Error(responseData.error);
            } else {
                console.log("fetched player data: ");
                console.log(responseData);
                return responseData;    // return back down to the caller (component)
            }
        } catch (error) {
            console.log(error);
            //alert(error);
        }
    }

    // for first time signup - different than updatePlayerData
    const createPlayerData = async (uid) => {
        if (uid) {
            console.log('updating player data on server');
            try {
                const response = await fetch('/api/update-player-data', {
                    method: 'POST',
                    body: JSON.stringify({
                        uid: uid,
                        playerLevel: 1,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data);
            } catch (e) {
                console.log(e);
            }

        } else {
            console.log('no uid');
        }
    }

    const updatePlayerData = async (newLevel) => { 
        const uid = authCtx.uid;
        if (uid) {
            console.log('updating player data on server');
            try {
                const response = await fetch('/api/update-player-data', { 
                    method: 'POST',
                    body: JSON.stringify({
                        uid: uid,
                        playerLevel: newLevel,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data);
                if ( response.ok ) {
                    let notif = {
                        status: 'success',
                        title: 'Player Saved',
                        message: 'Player details saved to database successfully!'
                    }
                    dispatch(setNotification(notif))
                } else {
                    let notif = {
                        status: 'error',
                        title: 'Player Not Saved',
                        message: 'Error while saving player details to database.'
                    }
                    dispatch(setNotification(notif))
                    let errorObj = {
                        status: response.status,
                        statusText: response.statusText,
                        message: responseData.error || 'Error'
                    }
                    dispatch(setError(errorObj));
                    throw new Error(responseData.error);
                }
            } catch (e) {
                console.log(e);
            }

        } else {
            console.log('no uid');
        }
    }

    const updateUsername = async (uid, playerLevel, username) => {
        if (uid) {
            console.log('updating player username on server to ' + username);
            try {
                const response = await fetch('/api/update-username', {
                    method: 'POST',
                    body: JSON.stringify({
                        uid,
                        playerLevel,
                        username,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                console.log(data);

                if ( response.ok ) {
                    dispatch(setUsername(username));
                }

                router.replace('/');
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log('no uid');
        }
    }

    return {
        loadPlayer,
        getAllPlayers,
        createPlayerData,
        updatePlayerData,
        updateUsername
    };
}

export default useDatabase;