import { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import PlayerControls from './components/PlayerControls';
import CardDetails from './assets/CardDetails';

let enemyList = [...CardDetails.monsters];
let playerLevel = 1;

function App() {
  const [currentEnemy, setCurrentEnemy] = useState(enemyList[0]);
  const [playerHealth, setPlayerHealth] = useState(10);

  useEffect(() => {
    console.log("Current Enemy health: " + currentEnemy.health);

    if (currentEnemy.health <= 0) {
      console.log("Winner!");
      enemyList.shift();
      if ( enemyList[0] ) {
        setCurrentEnemy( enemyList[0] );
      } else {
        setCurrentEnemy( {} );
      }
    }

  }, [currentEnemy.health]);

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
    //let damage = attackPlayer(true);
    let heal = Math.round(Math.random() * 4);
    if ( heal + playerHealth > 10 ) { heal = 10 - playerHealth };
    //let newHealth = playerHealth + heal - damage;
    setPlayerHealth((oldHealth) => {
      return oldHealth + heal;
    });
    console.log("Player heals for " + heal + " hp");
    attackPlayer();
  }

  const attackPlayer = (heal) => {
    let damage = Math.round(Math.random() * 2);
    console.log(currentEnemy.name + " attacks player for " + damage + " hp");
    
    //if (heal) { return damage };

    //let newHealth = playerHealth - damage > 0 ? playerHealth - damage : 0;
    setPlayerHealth((oldHealth) => {
      return oldHealth - damage;
    });
    
  };

  const resetHandler = () => {
    //playerLevel = status === 'win' ? playerLevel + 1 : 1;
    playerLevel = 1;
    setPlayerHealth(10);
    enemyList = [...CardDetails.monsters];
    console.log(CardDetails.monsters);
    console.log("Player level: " + playerLevel);
    setCurrentEnemy(enemyList[0]);
  };

  const newGameHandler = () => {
    playerLevel = playerLevel + 1;
    setPlayerHealth(10);
    enemyList = [...CardDetails.monsters];
    console.log(CardDetails.monsters);
    console.log("Player level: " + playerLevel);
    setCurrentEnemy(enemyList[0]);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <GameBoard 
        currentEnemy={currentEnemy} 
        resetHandler={resetHandler}
        newGameHandler={newGameHandler}
        playerHealth={playerHealth}/>
      <PlayerControls 
        attackHandler={attackHandler} 
        healHandler={healHandler}
        playerHealth={playerHealth}/>
    </div>
  );
}

export default App;
