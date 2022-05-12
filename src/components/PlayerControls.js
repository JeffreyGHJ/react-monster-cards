import classes from './PlayerControls.module.css';

const PlayerControls = props => {

    const playerControls = `${classes['player-controls']} container`

    return (
        <div className={playerControls}>
            <h2>Player Controls</h2>
            <div className={classes['control-panel']}>
                <button id='attack-button'>Attack</button>
                <button id='special-attack-button'>Special Attack</button>
                <button id='heal-button'>Heal</button>
                <button id='surrender-button'>Surrender</button>
            </div>
            
        </div>
    );

}

export default PlayerControls;