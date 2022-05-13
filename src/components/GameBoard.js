import classes from './GameBoard.module.css';
import MonsterCard from "./MonsterCard";

const GameBoard = props => {
    const gameBoardStyle = `container ${classes['game-board']}`;

    return (
        <div className={gameBoardStyle}>
            <h1>Game Board</h1>
            <div className={classes['enemy-card-space']}>
                <MonsterCard monster={props.currentEnemy} />
            </div>
        </div>
    );
};

export default GameBoard;