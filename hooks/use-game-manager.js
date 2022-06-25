import { useDispatch, useSelector } from "react-redux";
import { setMaxPlayerHealth, increaseMaxHealthBy, decreaseHealthBy, increaseHealthBy, incrementPlayerLevel, resetPlayerLevel, setPlayerHealth, setLastSpec, incrementTurn } from '../slices/player-slice';
import { setEnemyDeck, setCurrentEnemy, setFirstEnemy, shiftEnemyDeck, scaleCurrentEnemy, decreaseEnemyHealthBy } from '../slices/enemy-board-slice';
import { setGameStatus} from "../slices/game-slice";
import useDatabase from "./use-database";
import useBattleLog from "./use-battle-log";

const useGameManager = () => {
    const enemyList = useSelector((state) => state.enemyBoard.enemyDeck);
    const currentEnemy = useSelector((state) => state.enemyBoard.currentEnemy);
    const playerLevel = useSelector((state) => state.player.playerLevel);
    const maxPlayerHealth = useSelector((state) => state.player.maxPlayerHealth);
    const playerHealth = useSelector((state) => state.player.playerHealth);
    const { updatePlayerData } = useDatabase();
    const { logMessage } = useBattleLog();
    const dispatch = useDispatch();

    const resetGame = (status) => {
        dispatch(setEnemyDeck());
        dispatch(setFirstEnemy());
        dispatch(setLastSpec(true));
        if (status === 'continue') {
            console.log("new game +")
            let newPlayerLevel = playerLevel + 1;
            dispatch(incrementPlayerLevel());
            dispatch(scaleCurrentEnemy(newPlayerLevel));
            dispatch(increaseMaxHealthBy(newPlayerLevel * 2));
            updatePlayerData(newPlayerLevel);
            dispatch(setGameStatus('playing'));
        } else if (status === 'retry') {
            console.log("resetting game")
            dispatch(setPlayerHealth(10));
            dispatch(setMaxPlayerHealth(10));
            dispatch(resetPlayerLevel());
            updatePlayerData(1);
            dispatch(setGameStatus('playing'));
        } else if (status === 'surrender') {
            console.log('surrendering battle');
            dispatch(setPlayerHealth(maxPlayerHealth));
            dispatch(setGameStatus('playing'));
        } else {  // status not handled
            console.log("Error: resetHandler status not handled");
            dispatch(setGameStatus('playing'));
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
                dispatch(setGameStatus('win'));
            }
        }
    };

    const setPlayerHealthToMax = () => {
        console.log("new maxPlayerHealth: " + maxPlayerHealth);
        dispatch(setPlayerHealth(maxPlayerHealth));
    }

    const executeAttack = () => {
        let damage = Math.round(Math.random() * 3);
        logMessage('player', 'attack', damage);
        dispatch(decreaseEnemyHealthBy(damage));
        attackPlayer();
    }

    const executeSpecialAttack = () => {
        let damage = Math.round(Math.random() * 5);
        logMessage('player', 'special', damage);
        dispatch(decreaseEnemyHealthBy(damage));
        dispatch(setLastSpec());
        attackPlayer();
    }

    const executeHeal = () => {
        let heal = Math.round(Math.random() * (3 + playerLevel));
        logMessage('player', 'heal', heal);
        dispatch(increaseHealthBy(heal));
        attackPlayer();
    }

    const detectGameOver = () => {
        if (playerHealth <= 0) {
            /* logMessage('system', 'game over', null); */
            dispatch(setGameStatus('lose'));
        }
    }

    // HELPER FUNCTION - DOES NOT NEED TO BE RETURNED
    const attackPlayer = () => {
        let damage = Math.round(Math.random() * 2);
        logMessage(currentEnemy.name, 'attack', damage);
        dispatch(decreaseHealthBy(damage));
        dispatch(incrementTurn());
    }

    return {
        resetGame,
        updateCurrentEnemy,
        setPlayerHealthToMax,
        executeAttack,
        executeSpecialAttack,
        executeHeal,
        detectGameOver,
    };
};

export default useGameManager;