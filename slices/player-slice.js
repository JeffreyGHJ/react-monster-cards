import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    maxPlayerHealth: 10,
    playerHealth: 10,
    playerLevel: 1,
    turn: 1,
    lastSpec: null,
    username: 'Guest',
};

export const playerSlice = createSlice ({
    name: 'player',
    initialState,
    reducers: {
        setMaxPlayerHealth: (state, action) => {
            console.log("Setting max player health");
            state.maxPlayerHealth = action.payload;
        },
        increaseMaxHealthBy: (state, action) => {
            console.log("Increasing max player health");
            state.maxPlayerHealth += action.payload;
        },
        setPlayerHealth: (state, action) => {
            console.log("setting player health");
            state.playerHealth = action.payload;
        },
        increaseHealthBy: (state, action) => {
            console.log("Player heals for " + action.payload + " hp");
            if ( state.playerHealth + action.payload > state.maxPlayerHealth ) {
                state.playerHealth = state.maxPlayerHealth;
            } else {
                state.playerHealth += action.payload;
            }
        },
        decreaseHealthBy: (state, action) => {
            let damage = +action.payload;
            console.log("player is attacked for " + damage + " hp");
            if ( state.playerHealth - damage < 0 ) {
                state.playerHealth = 0;
            } else {
                state.playerHealth -= damage;
            }
            console.log("current player health: " + state.playerHealth);
        },
        resetPlayerLevel: (state) => {
            console.log("resetting player level");
            state.playerLevel = 1;
        },
        incrementPlayerLevel: (state) => {
            console.log("incrementing player level");
            state.playerLevel += 1;
        },
        setPlayerLevel: (state, action) => {
            console.log("Setting player level to: " + action.payload);
            state.playerLevel = action.payload;
        },
        setLastSpec: (state, action) => {
            if (action.payload) {
                console.log("clearing last spec");
                state.lastSpec = null;
            } else {
                console.log("Setting last special attack occurrence to turn: " + state.turn);
                state.lastSpec = state.turn;
            }
        },
        incrementTurn: (state) => {
            state.turn += 1;
            console.log("Current turn: " + state.turn);
        },
        setUsername: (state, action) => {
            console.log("setting username to: " + action.payload);
            state.username = action.payload;
        }
    },
});

export const { 
    setMaxPlayerHealth, 
    increaseMaxHealthBy, 
    setPlayerHealth, 
    increaseHealthBy, 
    decreaseHealthBy, 
    resetPlayerLevel, 
    incrementPlayerLevel,
    setPlayerLevel,
    setLastSpec,
    incrementTurn,
    setUsername,
} = playerSlice.actions;

export default playerSlice.reducer;