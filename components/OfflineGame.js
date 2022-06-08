import { useEffect } from 'react';
import GameBoard from './GameBoard';
import PlayerControls from './PlayerControls';
import { useDispatch, useSelector } from 'react-redux';
import { setMaxPlayerHealth, decreaseHealthBy, increaseHealthBy, increaseMaxHealthBy, incrementPlayerLevel, resetPlayerLevel, setPlayerHealth } from '../slices/playerSlice';
import { setEnemyDeck, setCurrentEnemy, setFirstEnemy, shiftEnemyDeck, scaleCurrentEnemy, decreaseEnemyHealthBy } from '../slices/enemyBoardSlice';

const OfflineGame = (props) => {
  const playerHealth = useSelector((state) => state.player.playerHealth);
  const playerLevel = useSelector((state) => state.player.playerLevel);
  const maxPlayerHealth = useSelector((state) => state.player.maxPlayerHealth);
  const enemyList = useSelector((state) => state.enemyBoard.enemyDeck);
  const currentEnemy = useSelector((state) => state.enemyBoard.currentEnemy);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(enemyList);
    console.log(currentEnemy)
    if ( currentEnemy === null || currentEnemy.health <= 0 ) {
      if ( enemyList.length > 0 ) {
        console.log("setting next enemy");
        dispatch(setCurrentEnemy(enemyList[0]));
        dispatch(scaleCurrentEnemy(playerLevel));
        dispatch(shiftEnemyDeck());
      } else {
        console.log("setting empty enemy");
        dispatch(setCurrentEnemy({}));
      }
    }

  }, [currentEnemy, enemyList, playerLevel, dispatch]);

  useEffect(() => { // can probably weave this logic somewhere else and remove this effect
    console.log("new maxPlayerHealth: " + maxPlayerHealth);
    dispatch(setPlayerHealth(maxPlayerHealth));
  }, [maxPlayerHealth, dispatch]);

  // Watch for lose condition here:
  useEffect(() => {
    console.log("Current player health: " + playerHealth);
    if (playerHealth <= 0) {
      console.log("Loser!");
    }
  }, [playerHealth]);

  const attackHandler = () => {
    let damage = Math.round(Math.random() * 3);
    dispatch(decreaseEnemyHealthBy(damage));
    attackPlayer();
  };

  const healHandler = () => {
    let heal = 10//Math.round(Math.random() * (3 + playerLevel));
    console.log("Player heals for " + heal + " hp");
    dispatch(increaseHealthBy(heal));
    attackPlayer();
  }

  const attackPlayer = () => {
    let damage = Math.round(Math.random() * 2);
    console.log(currentEnemy.name + " attacks player for " + damage + " hp");
    dispatch(decreaseHealthBy(damage));
  };

  const resetHandler = (status) => {
    dispatch(setEnemyDeck());
    dispatch(setFirstEnemy());
    if (status === 'continue') {
      console.log("new game +")
      let newPlayerLevel = playerLevel + 1;
      dispatch(incrementPlayerLevel());
      dispatch(scaleCurrentEnemy(newPlayerLevel));
      dispatch(increaseMaxHealthBy(newPlayerLevel * 2));
    } else if (status === 'reset') {
      console.log("resetting game")
      dispatch(setPlayerHealth(10));
      dispatch(setMaxPlayerHealth(10));
      dispatch(resetPlayerLevel());
    } else {  // status not handled
      console.log("Error: resetHandler status not handled");
    }
  };

  return (
    <>
      <GameBoard
        currentEnemy={currentEnemy}
        resetHandler={resetHandler}
        playerHealth={playerHealth}
        playerLevel={playerLevel} />
      <PlayerControls
        attackHandler={attackHandler}
        healHandler={healHandler}
        playerHealth={playerHealth}
        maxPlayerHealth={maxPlayerHealth} />
    </>
  );
};

export default OfflineGame;