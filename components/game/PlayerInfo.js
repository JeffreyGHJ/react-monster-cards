import { useSelector } from 'react-redux';
import classes from './PlayerInfo.module.css';

const PlayerInfo = () => {
    const username = useSelector(state => state.player.username);
    const playerLevel = useSelector(state => state.player.playerLevel);

    return (
        <div className={classes['player-info']} /* style={{ width: '100%' }} */>
            {'Player Info:'}
            <div className={classes['player-name']}>
                {username}
            </div>
            <div className={classes['player-level']}>
                Level: {playerLevel}
            </div>
        </div>
    );
};

export default PlayerInfo;