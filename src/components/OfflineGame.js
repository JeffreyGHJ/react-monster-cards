import { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import PlayerControls from './PlayerControls';
import CardGenerator from '../util/CardGenerator';
import { useDispatch, useSelector } from 'react-redux';
import { setMaxPlayerHealth, decreaseHealthBy, increaseHealthBy, increaseMaxHealthBy, incrementPlayerLevel, resetPlayerLevel, setPlayerHealth } from '../store/slices/playerSlice';

let enemyList = CardGenerator();

const OfflineGame = (props) => {
  const playerHealth = useSelector((state) => state.player.playerHealth);
  const playerLevel = useSelector((state) => state.player.playerLevel);
  const maxPlayerHealth = useSelector((state) => state.player.maxPlayerHealth);
  const dispatch = useDispatch();

  //const [playerLevel, setPlayerLevel] = useState(1);
  //const [playerHealth, setPlayerHealth] = useState(10);
  //const [maxPlayerHealth, setMaxPlayerHealth] = useState(10);
  const [currentEnemy, setCurrentEnemy] = useState(enemyList[0]);

  useEffect(() => {
    console.log("Current Enemy health: " + currentEnemy.health);

    if (currentEnemy.health <= 0) {
      console.log("Enemy slain!");
      enemyList.shift();
      if (enemyList[0]) {
        enemyList[0].health *= playerLevel;
        enemyList[0].maxHealth *= playerLevel;
        setCurrentEnemy(enemyList[0]);
      } else {
        setCurrentEnemy({});
      }
    }

  }, [currentEnemy.health, playerLevel]);

  useEffect(() => {
    //console.log("maxPlayerHealth: " + maxPlayerHealth);
    //setPlayerHealth(maxPlayerHealth);
  }, [maxPlayerHealth]);

  // Watch for lose condition here:
  useEffect(() => {
    console.log("Current player health: " + playerHealth);
    if (playerHealth <= 0) {
      console.log("Loser!");
    }
  }, [playerHealth]);

  const attackHandler = () => {
    let damage = Math.round(Math.random() * 3);
    let newHealth = currentEnemy.health - damage > 0 ? currentEnemy.health - damage : 0;

    setCurrentEnemy((prevState) => {
      return {
        ...prevState,
        health: newHealth
      };
    });

    console.log("Player attacks " + currentEnemy.name + " for " + damage + " hp");
    attackPlayer();
  };

  const healHandler = () => {
    let heal = Math.round(Math.random() * (3 + playerLevel));
    /* if (heal + playerHealth > maxPlayerHealth) { heal = maxPlayerHealth - playerHealth };
    setPlayerHealth((oldHealth) => {
      return oldHealth + heal;
    }); */
    console.log("Player heals for " + heal + " hp");
    dispatch(increaseHealthBy(heal));
    attackPlayer();
  }

  const attackPlayer = () => {
    let damage = Math.round(Math.random() * 2);
    console.log(currentEnemy.name + " attacks player for " + damage + " hp");
    /* setPlayerHealth((oldHealth) => {
      return oldHealth - damage;
    }); */
    dispatch(decreaseHealthBy(damage));
  };

  const resetHandler = (status) => {
    enemyList = CardGenerator();
    setCurrentEnemy(enemyList[0]);

    if (status === 'continue') {
      let newPlayerLevel = playerLevel + 1;
      let healthBonus = 2 * newPlayerLevel;
      enemyList[0].health *= newPlayerLevel;
      enemyList[0].maxHealth *= newPlayerLevel;
      /* setPlayerLevel((oldPlayerLevel) => {
        return oldPlayerLevel + 1;
      });
      setMaxPlayerHealth((oldHealth) => {
        return oldHealth + healthBonus;
      }); */
      dispatch(incrementPlayerLevel());
      dispatch(increaseMaxHealthBy(healthBonus));
    } else if (status === 'reset') {
      //setPlayerHealth(10);
      dispatch(setPlayerHealth(10));
      //setMaxPlayerHealth(10);
      dispatch(setMaxPlayerHealth(10));
      dispatch(resetPlayerLevel());
    } else {
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