import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useGameManager from '../hooks/use-game-manager';
import classes from './PlayerControls.module.css';

const playerControls = `${classes['player-controls']} container`
const SPEC_COOLDOWN = 5;

const PlayerControls = (props) => {
    const playerHealth = useSelector((state) => state.player.playerHealth);
    const maxPlayerHealth = useSelector((state) => state.player.maxPlayerHealth);
    const lastSpec = useSelector((state) => state.player.lastSpec);
    const turn = useSelector((state) => state.player.turn);
    const { executeSpecialAttack, resetGame } = useGameManager();

    const [specialOnCooldown, setSpecialOnCooldown] = useState(false);

    useEffect(() => {
        setSpecialOnCooldown(lastSpec !== null && turn - lastSpec <= SPEC_COOLDOWN);
    }, [lastSpec, turn])

    const currentHealthPercent = () => {
        let percent = (playerHealth / maxPlayerHealth) * 100;
        let result = percent + '%';
        return { width: result.toString() };
    }

    const specialAttackHandler = () => {
        executeSpecialAttack();
    };

    const surrenderHandler = () => {
        resetGame('surrender');
    }

    return (
        <div className={playerControls}>
            <h2>Player Controls</h2>
            <div className={classes['control-panel']}>
                <button id='attack-button' onClick={props.attackHandler}>
                    Attack
                </button>
                <button id='special-attack-button' onClick={specialAttackHandler} disabled={specialOnCooldown}>
                    Special Attack
                </button>
                <button id='heal-button' onClick={props.healHandler}>
                    Heal
                </button>
                <button id='surrender-button' onClick={surrenderHandler}>
                    Surrender
                </button>
                <h4>HP: {playerHealth}</h4>
                <div className={classes.healthbar}>
                    <div className={classes.healthbar__value} style={currentHealthPercent()}></div>
                </div>
            </div>
        </div>
    );
}

export default PlayerControls;