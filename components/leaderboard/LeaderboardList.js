import { useEffect } from 'react';
import classes from './LeaderboardList.module.css';

let rank = 1;

const LeaderboardList = (props) => {

    useEffect(() => {
        rank = 1;
    });

    return (
        <>
            <div className={classes['leaderboard']}>
                <h1>Leaderboard</h1>
                <div className={classes['leaderboard-container']}>
                    {props.players.length < 1 &&
                        <div className={classes['loading-notification']}>
                            Loading Data...
                        </div>
                    }
                    {props.players.length > 0 &&
                        <table>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Username</th>
                                    <th>Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.players.map(player => (
                                    <tr className={classes['bordered-row']}>
                                        <td className={classes['rank']}>{rank++}</td>
                                        <td className={classes['name']}>{player.username}</td>
                                        <td className={classes['level']}>{player.playerLevel}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    );
}

export default LeaderboardList;



{/* <div className={classes['leaderboard']}>
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
</div> */}