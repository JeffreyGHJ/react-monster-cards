import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useGameManager from '../../hooks/use-game-manager';
import GameBoard from './GameBoard';
import PlayerControls from './PlayerControls'; 
import classes from './MainGame.module.css';

const MainGame = () => {
  const playerLevel = useSelector((state) => state.player.playerLevel);
  const playerHealth = useSelector((state) => state.player.playerHealth);
  const currentEnemy = useSelector((state) => state.enemyBoard.currentEnemy);
  const { updateCurrentEnemy, detectGameOver, initializeBattle, } = useGameManager();

  useEffect(() => {
    initializeBattle(true);
  }, [playerLevel])

  useEffect(() => {
    updateCurrentEnemy();
  }, [currentEnemy]);

  useEffect(() => {
    detectGameOver();
  }, [playerHealth])

  return (
    <div className={classes['main-game']}>
      <GameBoard />
      <PlayerControls />
    </div>
  );
};

export default MainGame;