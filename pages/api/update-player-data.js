async function handler(request, res) {
    if (request.method === 'POST') {
        const data = request.body;
        const { uid, playerLevel } = data;

        console.log("saving new player to db");
        const response = await fetch('https://react-monster-cards-default-rtdb.firebaseio.com/players/' + uid + '.json', {
            method: 'PATCH',
            body: JSON.stringify({
                playerLevel: playerLevel
            }),
        });
        const responseData = await response.json();
        console.log(responseData);
        res.status(response.status).json(responseData); 

        // TO-DO: SEND A RESPONSE BACK TO CALLER


        /* res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(responseData); */



        /* console.log("updating player in db");
        const response = await fetch('https://react-monster-cards-default-rtdb.firebaseio.com/players/' + uid + '.json', {
            method: 'PUT',
            body: JSON.stringify({
                user: uid,
                playerLevel: playerLevel
            }),
        });
        const responseData = await response.json();
        console.log(responseData); */
        
    }
}

export default handler;