import { useSelector } from 'react-redux';
import useGameManager from '../hooks/use-game-manager';
import classes from './GameOptions.module.css';

const GameOptions = () => {
    const gameStatus = useSelector(state => state.game.gameStatus);
    const { resetGame } = useGameManager();

    const resetHandler = (status) => {
        resetGame(status);
    };

    return (
        <div className={classes['game-options']}>
            <h4>Game Options</h4>
            <div className={classes['control-panel']}>
                {gameStatus === 'win' &&
                    <button onClick={() => resetHandler('continue')} className={classes['continue-button']}>
                        Continue
                    </button>
                }
                {gameStatus === 'lose' &&
                    <button onClick={() => resetHandler('retry')} className={classes['retry-button']}>
                        Retry
                    </button>
                }
            </div>
        </div>
    );
};

export default GameOptions;