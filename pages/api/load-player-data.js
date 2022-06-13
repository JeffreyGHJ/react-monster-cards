async function handler(req, res) {
    if ( req.method === 'POST' ) {
        const { uid } = req.body
        console.log("sending request for player data...");
        console.log(uid);
        try {
            if (uid) {
                console.log('test');
                const response = await fetch('https://react-monster-cards-default-rtdb.firebaseio.com/players/' + uid + '.json', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                res.setHeader('Content-Type', 'application/json');
                const data = await response.json();
                console.log(data);
                if ( !response.ok ) { 
                    console.log("adding error to response");
                    res.status(data.error.code).json({      // this status code will produce RED in dev console
                        error: data.error
                    });
                } else {
                    res.status(200).json(data);             // success
                }
            } else {
                console.log('test2');
                res.status(405).json(new Error("no uid"));
            }
            console.log('test3');
        } catch (error) {
            console.log('test4');
            console.log(error);
            res.status(405).json(error);
            //res.status(405).end();
        }
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