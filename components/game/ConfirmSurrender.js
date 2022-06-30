import useGameManager from '../../hooks/use-game-manager';
import classes from './ConfirmSurrender.module.css';

const ConfirmSurrender = () => {

    const { resetGame, updateGameStatus } = useGameManager();

    const cancelSurrenderHandler = () => {
        updateGameStatus('playing');
    };

    const confirmSurrenderHandler = () => {
        resetGame('surrender');
    };


    return (
        <div className={classes['confirm-surrender']}>
            <div className={classes['message-area']}>
                <div className={classes['message-title']}>
                    Surrender Battle?
                </div>
                <div className={classes['message-body']}>
                    Current progress will be lost but you will not suffer a penalty to your Player Level.
                </div>
            </div>
            <div className={classes['control-panel']}>
                <button onClick={cancelSurrenderHandler}>Cancel</button>
                <button onClick={confirmSurrenderHandler}>Confirm</button>
            </div>
        </div>
    );
};

export default ConfirmSurrender;