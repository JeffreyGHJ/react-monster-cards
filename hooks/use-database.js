import { useRouter } from "next/router";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import AuthContext from "../slices/auth-context";
import { setPlayerLevel, setUsername } from "../slices/player-slice";


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
                console.log('error in response');
                throw new Error(responseData.error.message);
            } else {
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
            alert(error);
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
                throw new Error(responseData.error.message);
            } else {
                console.log("fetched player data: ");
                console.log(responseData);
                return responseData;    // return back down to the caller (component)
            }
        } catch (error) {
            console.log(error);
            alert(error);
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