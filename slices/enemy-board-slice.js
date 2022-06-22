import { createSlice } from '@reduxjs/toolkit';
import CardGenerator from '../util/CardGenerator';

let cards = CardGenerator();
let startingEnemy = cards.shift();

const initialState = { 
    enemyDeck: cards,
    currentEnemy: startingEnemy,
};

export const enemyBoardSlice = createSlice({
    name: 'enemyBoard',
    initialState,
    reducers: {
        setEnemyDeck: (state) => {
            console.log("Setting enemy deck");
            state.enemyDeck = CardGenerator();
        },
        setCurrentEnemy: (state, action) => {
            console.log("setting current enemy");
            state.currentEnemy = action.payload;
        },
        setFirstEnemy: (state) => {
            console.log("setting first enemy");
            state.currentEnemy = state.enemyDeck.shift();
        },
        shiftEnemyDeck: (state) => {
            console.log("shifting enemy deck");
            state.enemyDeck.shift();
        },
        scaleCurrentEnemy: (state, action) => {
            console.log("scaling current enemy by: " + action.payload);
            console.log("current enem health: " + state.currentEnemy.health);
            state.currentEnemy.health *= action.payload;
            state.currentEnemy.maxHealth *= action.payload;
            console.log("scaled enem health: " + state.currentEnemy.health);
        },
        decreaseEnemyHealthBy: (state, action) => {
            let damage = +action.payload;
            console.log("Player attacks " + state.currentEnemy.name + " for " + damage + " hp");
            if ( state.currentEnemy.health - damage < 0 ) {
                state.currentEnemy.health = 0;
            } else {
                state.currentEnemy.health -= damage;
            }
            console.log("current enemy health: " + state.currentEnemy.health);
        }
    }
});

export const {
    setEnemyDeck,
    setCurrentEnemy,
    setFirstEnemy,
    shiftEnemyDeck,
    scaleCurrentEnemy,
    decreaseEnemyHealthBy,
} = enemyBoardSlice.actions;

export default enemyBoardSlice.reducer;