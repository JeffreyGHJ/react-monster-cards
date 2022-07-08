async function handler(req, res) {

    console.log("sending request for player data...");

    const { uid } = req.body

    console.log(uid);
    try {
        if (uid) {
            const response = await fetch('https://react-monster-cards-default-rtdb.firebaseio.com/players/' + uid + '.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const responseData = await response.json();
            console.log(response);
            console.log(responseData);
            res.status(response.status).json(responseData);
        } else {
            res.status(400).json(new Error("no uid"));
        }
    } catch (e) {   
        res.status(400).json(e);
    } 
}

export default handler;