import { useSelector } from 'react-redux';
import useGameManager from '../../hooks/use-game-manager';
import ConfirmSurrender from './ConfirmSurrender';
import classes from './GameOptions.module.css';

const GameOptions = () => {
    const gameStatus = useSelector(state => state.game.gameStatus);
    const { resetGame } = useGameManager();

    const resetHandler = (status) => {
        resetGame(status);
    };

    return (
        <div className={classes['game-options']}>
            {gameStatus !== 'surrender' &&
                <>
                    <div style={{ fontSize: '3vmin' }}>
                        Game Options
                    </div>
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
                </>
            }
            {gameStatus === 'surrender' &&
                <ConfirmSurrender />
            } 
        </div>
    );
};

export default GameOptions;