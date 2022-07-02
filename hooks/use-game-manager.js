import { useDispatch, useSelector } from "react-redux";
import { setMaxPlayerHealth, increaseMaxHealthBy, decreaseHealthBy, increaseHealthBy, incrementPlayerLevel, decrementPlayerLevel, resetPlayerLevel, setPlayerHealth, setLastSpec, incrementTurn, resetTurns } from '../slices/player-slice';
import { setEnemyDeck, setCurrentEnemy, setFirstEnemy, shiftEnemyDeck, scaleCurrentEnemy, decreaseEnemyHealthBy } from '../slices/enemy-board-slice';
import { setGameStatus, setInit } from "../slices/game-slice";
import useDatabase from "./use-database";
import useBattleLog from "./use-battle-log";

const useGameManager = () => {
    const enemyList = useSelector((state) => state.enemyBoard.enemyDeck);
    const currentEnemy = useSelector((state) => state.enemyBoard.currentEnemy);
    const playerLevel = useSelector((state) => state.player.playerLevel);
    const maxPlayerHealth = useSelector((state) => state.player.maxPlayerHealth);
    const playerHealth = useSelector((state) => state.player.playerHealth);
    const initialized = useSelector(state => state.game.initialized);
    const { updatePlayerData } = useDatabase();
    const { logMessage } = useBattleLog();
    const dispatch = useDispatch();

    const resetGame = (status) => { 
        initializeBattle();
        let newPlayerLevel = playerLevel;
        if (status === 'continue') {
            newPlayerLevel += 1;
            updatePlayerData(newPlayerLevel);
            dispatch(incrementPlayerLevel());
        } else if (status === 'retry') {
            newPlayerLevel -= 1;
            updatePlayerData(newPlayerLevel);
            if ( playerLevel > 1 ) {
                dispatch(decrementPlayerLevel());
            }
        } else if (status === 'surrender') {
            console.log('surrendering battle');
        } else {
            console.log("Error: resetHandler status not handled");
        }
        dispatch(scaleCurrentEnemy(newPlayerLevel - 1));
        dispatch(setGameStatus('playing'));
    };

    const initializeBattle = () => {
        dispatch(resetTurns());
        dispatch(setLastSpec(true));
        let newHealth = 10 + ( (playerLevel-1) * 2);
        dispatch(setMaxPlayerHealth(newHealth));
        dispatch(setPlayerHealth(newHealth));
        dispatch(setEnemyDeck());
        dispatch(setFirstEnemy());
        if ( !initialized ) {
            dispatch(scaleCurrentEnemy(playerLevel-1));
            setInit();
        } 
        // CLEAR BATTLE LOG?
    }

    const scaleGame = () => {
        console.log("scaling game stats");
        dispatch(setMaxPlayerHealth( 10 + ( (playerLevel-1) * 2 ) ));
        dispatch(setPlayerHealth(maxPlayerHealth));
        dispatch(scaleCurrentEnemy(playerLevel-1));
    }

    const updateCurrentEnemy = () => {
        if (currentEnemy === null || currentEnemy.health <= 0) {
            if (enemyList.length > 0) {
                console.log("setting next enemy");
                dispatch(setCurrentEnemy(enemyList[0]));
                dispatch(scaleCurrentEnemy(playerLevel-1));
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
        let damage = Math.round(Math.random() * (3 + playerLevel));
        logMessage('player', 'attack', damage);
        dispatch(decreaseEnemyHealthBy(damage));
        attackPlayer();
    }

    const executeSpecialAttack = () => {
        let damage = Math.round(Math.random() * 8);
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

    const updateGameStatus = (status) => {
        dispatch(setGameStatus(status));
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
        initializeBattle,
        scaleGame,
        setPlayerHealthToMax,
        executeAttack,
        executeSpecialAttack,
        executeHeal,
        detectGameOver,
        updateGameStatus,
    };
};

export default useGameManager;