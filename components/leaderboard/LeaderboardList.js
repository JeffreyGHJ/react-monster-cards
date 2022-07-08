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
                                    <tr key={rank} className={classes['bordered-row']}>
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