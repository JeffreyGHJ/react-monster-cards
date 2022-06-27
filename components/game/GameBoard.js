import { useSelector } from 'react-redux';
import classes from './GameBoard.module.css';
import MonsterCard from "./MonsterCard";

const gameBoardStyle = `container ${classes['game-board']}`;

const GameBoard = () => {
    const currentEnemy = useSelector((state) => state.enemyBoard.currentEnemy);
    const gameStatus = useSelector((state) => state.game.gameStatus);

    return (
        <div className={classes['game-board']}>
            <div className={classes['game-board-container']}> 
                {/* <div>Game Board</div> */}
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
        </div>
    );
};

export default GameBoard;