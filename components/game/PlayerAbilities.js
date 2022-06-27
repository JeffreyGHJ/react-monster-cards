import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useGameManager from '../../hooks/use-game-manager';
import classes from './PlayerAbilities.module.css';

const SPEC_COOLDOWN = 5;

const PlayerAbilities = () => {
    const lastSpec = useSelector((state) => state.player.lastSpec);
    const turn = useSelector((state) => state.player.turn);
    const { executeAttack, executeSpecialAttack, executeHeal, resetGame } = useGameManager();
    const [specialOnCooldown, setSpecialOnCooldown] = useState(false);

    useEffect(() => {
        setSpecialOnCooldown(lastSpec !== null && turn - lastSpec <= SPEC_COOLDOWN);
    }, [lastSpec, turn]);

    const attackHandler = () => {
        executeAttack();
    };

    const healHandler = () => {
        executeHeal();
    }

    const specialAttackHandler = () => {
        executeSpecialAttack();
    };

    const surrenderHandler = () => {
        resetGame('surrender');
    };

    return (
        <div className={classes['player-abilities']}>
            <div>Player Abilities</div>
            <div className={classes['control-panel']}>
                <button id='attack-button' onClick={attackHandler}>
                    Attack
                </button>
                <button id='special-attack-button' onClick={specialAttackHandler} disabled={specialOnCooldown}>
                    Special Attack
                </button>
                <button id='heal-button' onClick={healHandler}>
                    Heal
                </button>
                <button id='surrender-button' onClick={surrenderHandler}>
                    Surrender
                </button>
                
            </div>
        </div>
    );
};

export default PlayerAbilities;