import { useSelector } from 'react-redux';
import classes from './PlayerControls.module.css';

const playerControls = `${classes['player-controls']} container`

const PlayerControls = (props) => {
    const playerHealth = useSelector((state) => state.player.playerHealth);
    const maxPlayerHealth = useSelector((state) => state.player.maxPlayerHealth);

    const currentHealthPercent = () => {
        let percent = (playerHealth / maxPlayerHealth) * 100;
        let result = percent + '%';
        return { width: result.toString() };
    }

    return (
        <div className={playerControls}>
            <h2>Player Controls</h2>
            <div className={classes['control-panel']}>
                <button id='attack-button' onClick={props.attackHandler}>Attack</button>
                <button id='special-attack-button' >Special Attack</button>
                <button id='heal-button' onClick={props.healHandler}>Heal</button>
                <button id='surrender-button' >Surrender</button>
                <h4>HP: {playerHealth}</h4>
                <div className={classes.healthbar}>
                    <div className={classes.healthbar__value} style={currentHealthPercent()}></div>
                </div>
            </div>
        </div>
    );
}

export default PlayerControls;