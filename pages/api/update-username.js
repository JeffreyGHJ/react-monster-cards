async function updateUsername(req, res) {
    if (req.method === 'POST') {
        const { uid, playerLevel, username } = req.body;
        if (uid) {
            try {
                console.log("updating player on db");
                const response = await fetch('https://react-monster-cards-default-rtdb.firebaseio.com/players/' + uid + '.json', {
                    method: 'PUT',
                    body: JSON.stringify({
                        playerLevel,
                        username
                    }),
                });
                const responseData = await response.json();
                console.log(responseData);
                if (!response.ok) {
                    console.log("adding error to response");
                    res.status(responseData.error.code).json({      // this status code will produce RED in dev console
                        error: responseData.error
                    });
                } else {
                    res.status(200).json(responseData);             // success
                }
            } catch (error) {
                console.log(error);
                res.status(405).json(error);
            }
        } else {
            res.status(405).json(new Error("no uid"));
        }
    }
}

export default updateUsername;