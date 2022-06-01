import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import GameBoard from './components/GameBoard';
import PlayerControls from './components/PlayerControls';
import AuthPage from './pages/AuthPage';
import CardGenerator from './util/CardGenerator';
import AppHeader from './components/AppHeader';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

let enemyList = CardGenerator();

function App() {
  const [playerLevel, setPlayerLevel] = useState(1);
  const [playerHealth, setPlayerHealth] = useState(10);
  const [maxPlayerHealth, setMaxPlayerHealth] = useState(10);
  const [currentEnemy, setCurrentEnemy] = useState(enemyList[0]);
  
  useEffect(() => {
    console.log("Current Enemy health: " + currentEnemy.health);

    if (currentEnemy.health <= 0) {
      console.log("Enemy slain!");
      enemyList.shift();
      if ( enemyList[0] ) {
        enemyList[0].health *= playerLevel;
        enemyList[0].maxHealth *= playerLevel;
        setCurrentEnemy( enemyList[0] );
      } else {
        setCurrentEnemy( {} );
      }
    }

  }, [currentEnemy.health, playerLevel]);

  useEffect(() => {
    console.log("new maxPlayerHealth: " + maxPlayerHealth);
    setPlayerHealth(maxPlayerHealth);
  }, [maxPlayerHealth]);

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
    if ( heal + playerHealth > maxPlayerHealth ) { heal = maxPlayerHealth - playerHealth };
    setPlayerHealth((oldHealth) => {
      return oldHealth + heal;
    });
    console.log("Player heals for " + heal + " hp");
    attackPlayer();
  }

  const attackPlayer = () => {
    let damage = Math.round(Math.random() * 2);
    console.log(currentEnemy.name + " attacks player for " + damage + " hp");
    setPlayerHealth((oldHealth) => {
      return oldHealth - damage;
    });
  };

  const resetHandler = (status) => {
    enemyList = CardGenerator();
    setCurrentEnemy(enemyList[0]);

    if ( status === 'continue' ) {
      let newPlayerLevel = playerLevel + 1;
      let healthBonus = 2 * newPlayerLevel;
      enemyList[0].health *= newPlayerLevel;
      enemyList[0].maxHealth *= newPlayerLevel;
      setPlayerLevel((oldPlayerLevel) => {
        return oldPlayerLevel + 1;
      });
      setMaxPlayerHealth((oldHealth) => {
        return oldHealth + healthBonus;
      });
    } else if ( status === 'reset' ) {
      setPlayerHealth(10);
      setMaxPlayerHealth(10);
      setPlayerLevel(1);
    } else {
      console.log("Error: resetHandler status not handled");
    }
  };

  return (
    <div className="App">
      <AppHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/play">
            <GameBoard 
              currentEnemy={currentEnemy} 
              resetHandler={resetHandler}
              playerHealth={playerHealth}
              playerLevel={playerLevel}/>
            <PlayerControls 
              attackHandler={attackHandler} 
              healHandler={healHandler}
              playerHealth={playerHealth}
              maxPlayerHealth={maxPlayerHealth}/>
          </Route>
          <Route path="/login">
            <AuthPage />
          </Route>
          <Route path="*"> 
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;