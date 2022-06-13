import { useDispatch } from "react-redux";
import { setPlayerLevel } from "../slices/player-slice";

const useDatabase = () => {
    const dispatch = useDispatch();

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
                    console.log("test");
                    dispatch(setPlayerLevel(responseData.playerLevel));
                }
            }
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };

    const updatePlayerData = async (uid) => {
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

    return {
        loadPlayer,
        updatePlayerData,
    };
}

export default useDatabase;