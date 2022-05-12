import classes from './GameBoard.module.css';
import MonsterCard from "./MonsterCard";
import CardDetails from "../assets/CardDetails";

const GameBoard = props => {

    const gameBoardStyle = `container ${classes['game-board']}`;

    return (
        <div className={gameBoardStyle}>
            <h1>Game Board</h1>
            <div className={classes['enemy-card-space']}>
                <MonsterCard monster={CardDetails.monsters.skeleton}/>
                <MonsterCard monster={CardDetails.monsters.skeletonWarrior}/>
                <MonsterCard monster={CardDetails.monsters.goblin}/>
                <MonsterCard monster={CardDetails.monsters.flyingEye}/>
                <MonsterCard monster={CardDetails.monsters.skeletonWarrior}/>
            </div>
        </div>
    );

};

export default GameBoard;