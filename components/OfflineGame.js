import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useGameManager from '../hooks/use-game-manager';
import GameBoard from './GameBoard';
import PlayerControls from './PlayerControls';

const OfflineGame = () => {
  const maxPlayerHealth = useSelector((state) => state.player.maxPlayerHealth);
  const currentEnemy = useSelector((state) => state.enemyBoard.currentEnemy);
  const { resetGame, updateCurrentEnemy, setPlayerHealthToMax, executeAttack, executeHeal } = useGameManager();

  useEffect(() => {
    updateCurrentEnemy();
  }, [currentEnemy]);

  useEffect(() => { 
    setPlayerHealthToMax();
  }, [maxPlayerHealth]);

  const attackHandler = () => {
    executeAttack();
  };

  const healHandler = () => {
    executeHeal();
  }

  const resetHandler = (status) => {
    resetGame(status);
  };

  return (
    <>
      <GameBoard
        resetHandler={resetHandler} />
      <PlayerControls
        attackHandler={attackHandler}
        healHandler={healHandler} />
    </>
  );
};

export default OfflineGame;