import { useDispatch, useSelector } from "react-redux";
import { setMaxPlayerHealth, increaseMaxHealthBy, incrementPlayerLevel, resetPlayerLevel, setPlayerHealth } from '../slices/player-slice';
import { setEnemyDeck, setCurrentEnemy, setFirstEnemy, shiftEnemyDeck, scaleCurrentEnemy } from '../slices/enemy-board-slice';
import useDatabase from "./use-database";

const useGameManager = () => {
    const enemyList = useSelector((state) => state.enemyBoard.enemyDeck);
    const currentEnemy = useSelector((state) => state.enemyBoard.currentEnemy);
    const playerLevel = useSelector((state) => state.player.playerLevel);
    const { updatePlayerData } = useDatabase();
    const dispatch = useDispatch();

    const resetGame = (status) => {  // Move to gameSlice
        dispatch(setEnemyDeck());
        dispatch(setFirstEnemy());
        if (status === 'continue') {
            console.log("new game +")
            let newPlayerLevel = playerLevel + 1;
            dispatch(incrementPlayerLevel());
            dispatch(scaleCurrentEnemy(newPlayerLevel));
            dispatch(increaseMaxHealthBy(newPlayerLevel * 2));
            updatePlayerData(newPlayerLevel);
        } else if (status === 'reset') {
            console.log("resetting game")
            dispatch(setPlayerHealth(10));
            dispatch(setMaxPlayerHealth(10));
            dispatch(resetPlayerLevel());
            updatePlayerData(1);
        } else {  // status not handled
            console.log("Error: resetHandler status not handled");
        }
    };

    const updateCurrentEnemy = () => {
        console.log(enemyList);
        console.log(currentEnemy)
        if (currentEnemy === null || currentEnemy.health <= 0) {
            if (enemyList.length > 0) {
                console.log("setting next enemy");
                dispatch(setCurrentEnemy(enemyList[0]));
                dispatch(scaleCurrentEnemy(playerLevel));
                dispatch(shiftEnemyDeck());
            } else {
                console.log("setting empty enemy");
                dispatch(setCurrentEnemy({}));
            }
        }
    };

    return {
        resetGame,
        updateCurrentEnemy
    };
};

export default useGameManager;