import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    maxPlayerHealth: 10,
    playerHealth: 10,
    playerLevel: 1,
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
            console.log("increasing player health");
            if ( state.playerHealth + action.payload > state.maxPlayerHealth ) {
                state.playerHealth = state.maxPlayerHealth;
            } else {
                state.playerHealth += action.payload;
            }
        },
        decreaseHealthBy: (state, action) => {
            let damage = +action.payload;
            if ( state.playerHealth - damage < 0 ) {
                state.playerHealth = 0;
            } else {
                state.playerHealth -= damage;
            }
            //console.log("current player health: " + state.playerHealth);
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
} = playerSlice.actions;

export default playerSlice.reducer;