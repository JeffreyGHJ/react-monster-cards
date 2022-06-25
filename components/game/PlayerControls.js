import { useSelector } from 'react-redux';
import BattleLog from './BattleLog';
import GameOptions from './GameOptions';
import PlayerAbilities from './PlayerAbilities';
import classes from './PlayerControls.module.css';
import PlayerInfo from './PlayerInfo';

const playerControls = `${classes['player-controls']} container`;

const getPercentageString = (playerHealth, maxPlayerHealth) => {
    let percent = (playerHealth / maxPlayerHealth) * 100;
    let result = percent + '%';
    return { width: result.toString() };
}

const PlayerControls = () => {
    const playerHealth = useSelector(state => state.player.playerHealth);
    const maxPlayerHealth = useSelector((state) => state.player.maxPlayerHealth);
    const gameStatus = useSelector(state => state.game.gameStatus);

    const currentHealthPercent = () => {
        return getPercentageString(playerHealth, maxPlayerHealth);
    };

    return (
        <div className={playerControls}>
            <h2>Player Controls</h2>
            <div className={classes['control-group-row']}>
                <div style={{ width: '35%' }}>
                    <PlayerInfo />
                </div>
                <div className={classes['control-group-row']}>
                    {gameStatus === 'playing' &&
                        <PlayerAbilities />
                    }
                    {gameStatus !== 'playing' &&
                        <GameOptions />
                    }
                </div>
                <div id='spacer' style={{ width: '35%' }}>
                    <BattleLog />
                </div>
            </div>
            <div className={classes['module-container']} style={{ width: '65%' }}>
                <div>HP: {playerHealth}</div>
                <div className={classes.healthbar}>
                    <div className={classes.healthbar__value} style={currentHealthPercent()}></div>
                </div>
            </div>
        </div>
    );
}

export default PlayerControls;