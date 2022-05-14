import classes from './GameBoard.module.css';
import MonsterCard from "./MonsterCard";

const gameBoardStyle = `container ${classes['game-board']}`;

const GameBoard = props => {

    let board;
    if ( props.playerHealth <= 0) {
        board = 
        <div>
            <h1>You Lose!</h1>
            <button onClick={props.resetHandler}>Reset</button>
        </div>
    } else if ( props.currentEnemy.health === undefined ) {
        board = 
            <div>
                <h1>You Win!</h1>
                <button onClick={props.newGameHandler}>New Game+</button>
            </div>
    } else {
        board = <MonsterCard monster={props.currentEnemy} />
    }

    return (
        <div className={gameBoardStyle}>
            <h1>Game Board</h1>
            <div className={classes['enemy-card-space']}>
                {board}
            </div>
        </div>
    );
};

export default GameBoard;