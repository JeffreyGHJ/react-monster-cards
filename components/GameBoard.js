import { useSelector } from 'react-redux';
import classes from './GameBoard.module.css';
import MonsterCard from "./MonsterCard";

const gameBoardStyle = `container ${classes['game-board']}`;
const playerLevelStyle = `container ${classes['player-level']}`;

const GameBoard = (props) => {
    const playerHealth = useSelector((state) => state.player.playerHealth);
    const playerLevel = useSelector((state) => state.player.playerLevel);
    const currentEnemy = useSelector((state) => state.enemyBoard.currentEnemy);

    let board;
    if ( playerHealth <= 0) {
        board =
            <div>
                <h1>You Lose!</h1>
                <button onClick={() => props.resetHandler('reset')}>Reset</button>
            </div>
    } else if (currentEnemy.health === undefined || isNaN( currentEnemy.health )) {
        board =
            <div>
                <h1>You Win!</h1>
                <button onClick={() => props.resetHandler('continue')}>New Game+</button>
            </div>
    } else {
        board = <MonsterCard monster={currentEnemy} />
    }

    return (
        <div className={gameBoardStyle}>
            <h1>Game Board</h1>
            <div className={playerLevelStyle}>
                <h4>PLAYER LEVEL</h4>
                <h1>{playerLevel}</h1>
            </div>

            <div className={classes['enemy-card-space']}>
                {board}
            </div>
        </div>
    );
};

export default GameBoard;