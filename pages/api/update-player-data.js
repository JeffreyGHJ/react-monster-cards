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
    }
}

export default handler;