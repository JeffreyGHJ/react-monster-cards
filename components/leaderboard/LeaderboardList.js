import classes from './LeaderboardList.module.css';

const LeaderboardList = (props) => {
    return (
        <div className={classes['leaderboard']}>
            <h1>Leaderboard</h1>
            <div>
                <ul className={classes['leaderboard-list']}>
                    {props.players.length < 1 && (
                        <div>Loading Data...</div>
                    )}
                    {props.players.length > 0 && (
                        <>
                            <div className={classes['list-heading']}>
                                <div><h4>Username</h4></div><div><h4>Level</h4></div>
                            </div>
                            {props.players.map(player => (
                                <li key={player.id} className={classes['list-entry']}>
                                    <div className={classes.cell}>{player.username}</div>
                                    <div className={classes.cell}>{player.playerLevel}</div>
                                </li>
                            ))}
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default LeaderboardList;