async function getAllPlayers(req, res) {
    console.log("sending request for all players");
    try {
        const response = await fetch('https://react-monster-cards-default-rtdb.firebaseio.com/players.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const responseData = await response.json();
        console.log(response);
        console.log(responseData);
        res.status(response.status).json(responseData);
    } catch (e) {   // FOR UNHANDLED ERRORS IN THIS REQ
        res.status(400).json(e);
    } 


    /* if( !responseData.error ) {
        res.json(responseData);
    } else {
        console.log('creating error object');
        let errorObj = {
            status: response.status,
            statusText: response.statusText,
            message: responseData.error
        }
        console.log(errorObj);
        res.status(response.status).json(responseData);
    } */



    /* try { 
        const response = await fetch('https://react-monster-cards-default-rtdb.firebaseio.com/players.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const responseData = await response.json();
        console.log(responseData);
        // create custom error or return results
        if ( !response.ok ) { 
            console.log("adding error to response");
            res.status(responseData.error.code).json({      // this status code will produce RED in dev console
                error: responseData.error
            });
        } else {
            res.status(200).json(responseData);             // success
        }
    } catch (error) {   // handle other errors
        console.log(error);
        res.status(405).json(error);
    } */
}

export default getAllPlayers;