import { useEffect } from 'react';
import GameBoard from './GameBoard';
import PlayerControls from './PlayerControls';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseHealthBy, increaseHealthBy, setPlayerHealth } from '../slices/player-slice';
import { decreaseEnemyHealthBy } from '../slices/enemy-board-slice';
import useGameManager from '../hooks/use-game-manager';

const OfflineGame = (props) => {
  const playerHealth = useSelector((state) => state.player.playerHealth);
  const playerLevel = useSelector((state) => state.player.playerLevel);
  const maxPlayerHealth = useSelector((state) => state.player.maxPlayerHealth);
  const currentEnemy = useSelector((state) => state.enemyBoard.currentEnemy);
  const { resetGame, updateCurrentEnemy } = useGameManager();
  const dispatch = useDispatch();

  useEffect(() => {
    updateCurrentEnemy();
  }, [currentEnemy]);

  useEffect(() => { 
    console.log("new maxPlayerHealth: " + maxPlayerHealth);
    dispatch(setPlayerHealth(maxPlayerHealth));
  }, [maxPlayerHealth, dispatch]);

 /*  useEffect(() => { 
    console.log("Current player health: " + playerHealth);
  }, [playerHealth]); */

  const attackHandler = () => {
    let damage = Math.round(Math.random() * 3);
    dispatch(decreaseEnemyHealthBy(damage));
    attackPlayer();
  };

  const healHandler = () => {
    let heal = Math.round(Math.random() * (3 + playerLevel));
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
    resetGame(status);
  };

  return (
    <>
      <GameBoard
        currentEnemy={currentEnemy}
        playerHealth={playerHealth}
        playerLevel={playerLevel}
        resetHandler={resetHandler} />
      <PlayerControls
        playerHealth={playerHealth}
        maxPlayerHealth={maxPlayerHealth}
        attackHandler={attackHandler}
        healHandler={healHandler} />
    </>
  );
};

export default OfflineGame;