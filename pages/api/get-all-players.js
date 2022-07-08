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
    } catch (e) {   
        res.status(400).json(e);
    } 
}

export default getAllPlayers;