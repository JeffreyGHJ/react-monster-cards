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
    } catch (e) {   // FOR UNHANDLED ERRORS IN THIS REQ
        res.status(400).json(e);
    } 

    //const res = await fetch('https://react-monster-cards-default-rtdb.firebaseio.com/players.json');
    //const responseData = await response.json();

    //console.log(responseData);
    /*
    for ( let entry in responseData ) {
        console.log(entry);
        console.log(responseData[entry]);
        console.log(responseData[entry].user);
        if ( responseData[entry].user === uid ) {
            console.log('user found in database: ' + responseData[entry].user);
            authCtx.databaseId = entry;
            break;
        }
    } */

    //return response;
}

export default handler;