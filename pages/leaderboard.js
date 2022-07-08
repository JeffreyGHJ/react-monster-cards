import { useEffect, useState } from "react";
import LeaderboardList from "../components/leaderboard/LeaderboardList";
import useDatabase from "../hooks/use-database";

function Leaderboard(props)  {
    const { getAllPlayers } = useDatabase()
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        console.log("Leaderboard useEffect() called");
        // Load players from database
        async function getPlayers() {
            let data = await getAllPlayers();
            let playerArray = [];
            for ( let player in data ) {
                let entry = {
                    id: player,
                    username: data[player].username || 'Anonymous',
                    playerLevel : data[player].playerLevel
                }
                playerArray.push(entry);
            }
            playerArray.sort(function(a,b){return b.playerLevel - a.playerLevel});
            setPlayers(playerArray);
        }
        getPlayers();
    }, []);
    
    return (
        <>
            <LeaderboardList players={players} />
        </>
    );
};

export default Leaderboard;