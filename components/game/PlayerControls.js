import { useSelector } from 'react-redux';
import BattleLog from './BattleLog';
import GameOptions from './GameOptions';
import PlayerAbilities from './PlayerAbilities';
import classes from './PlayerControls.module.css';
import PlayerInfo from './PlayerInfo';

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
        <div className={classes['player-controls']}>
            <div className={classes['player-controls-container']}>
                <div className={classes['control-group-row']}>
                    <PlayerInfo />
                    {gameStatus === 'playing' &&
                        <PlayerAbilities />
                    }
                    {gameStatus !== 'playing' &&
                        <GameOptions />
                    }
                    <BattleLog />
                </div>
                <div className={classes['module-container']}>
                    <div className={classes['health-text']}>
                        HP: {playerHealth}
                    </div>
                    <div className={classes.healthbar}>
                        <div className={classes.healthbar__value} style={currentHealthPercent()}></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PlayerControls;