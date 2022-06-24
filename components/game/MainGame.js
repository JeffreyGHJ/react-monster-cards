import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useGameManager from '../../hooks/use-game-manager';
import GameBoard from './GameBoard';
import PlayerControls from './PlayerControls'; 
import classes from './MainGame.module.css';

const MainGame = () => {
  const maxPlayerHealth = useSelector((state) => state.player.maxPlayerHealth);
  const playerHealth = useSelector((state) => state.player.playerHealth);
  const currentEnemy = useSelector((state) => state.enemyBoard.currentEnemy);
  const { updateCurrentEnemy, detectGameOver, setPlayerHealthToMax, resetGame } = useGameManager();

  useEffect(() => {
    updateCurrentEnemy();
  }, [currentEnemy]);

  useEffect(() => {
    detectGameOver();
  }, [playerHealth])

  useEffect(() => { 
    setPlayerHealthToMax();
  }, [maxPlayerHealth]);

  return (
    <div className={classes['main-game']}>
      <GameBoard />
      <PlayerControls />
    </div>
  );
};

export default MainGame;