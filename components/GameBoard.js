import { useSelector } from 'react-redux';
import classes from './GameBoard.module.css';
import MonsterCard from "./MonsterCard";

const gameBoardStyle = `container ${classes['game-board']}`;

const GameBoard = () => {
    const currentEnemy = useSelector((state) => state.enemyBoard.currentEnemy);
    const gameStatus = useSelector((state) => state.game.gameStatus);

    return (
        <div className={gameBoardStyle}>
            <h1>Game Board</h1>
            {gameStatus === 'playing' &&
                <div className={classes['enemy-card-space']}>
                    <MonsterCard monster={currentEnemy} />
                </div>
            }
            {gameStatus === 'win' &&
                <div>
                    <h1>Victory!</h1>
                </div>
            }
            {gameStatus === 'lose' &&
                <div>
                    <h1>Defeat!</h1>
                </div>
            }
        </div>
    );
};

export default GameBoard;