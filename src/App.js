import { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import PlayerControls from './components/PlayerControls';
import CardDetails from './assets/CardDetails';

function App() {

  const [currentEnemy, setCurrentEnemy] = useState(CardDetails.monsters[0]);

  useEffect(() => {
      setCurrentEnemy(CardDetails.monsters[0]);
  }, []);

  const attackHandler = () => {
    let damage = Math.round(Math.random() * 3);
    let oldHealth = currentEnemy.health;
    let newHealth;
    if( oldHealth - damage <= 0 ) {
      newHealth = 0;
    } else {
      newHealth = oldHealth - damage;
    }

    setCurrentEnemy ( 
      {
        name: currentEnemy.name,
        alt: currentEnemy.alt,
        info: currentEnemy.info,
        health: newHealth,
        maxHealth: currentEnemy.maxHealth,
        portraitIdle: currentEnemy.portraitIdle,
        customHeight: currentEnemy.customHeight,
      }
    );
    console.log("Player attacks " + currentEnemy.name + " for " + damage + " hp");
    console.log("Current Enemy health: " + currentEnemy.health);
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <GameBoard currentEnemy={currentEnemy} />
      <PlayerControls 
        attackHandler={attackHandler}
      />
    </div>
  );
}

export default App;
