import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    maxPlayerHealth: 11,
    playerHealth: 11,
    playerLevel: 2,
};

export const playerSlice = createSlice ({
    name: 'player',
    initialState,
    reducers: {
        setMaxPlayerHealth: (state, action) => {
            state.maxPlayerHealth = action.payload;
        },
        increaseMaxHealthBy: (state, action) => {
            state.maxPlayerHealth += action.payload;
        },
        setPlayerHealth: (state, action) => {
            state.playerHealth = action.payload;
        },
        increaseHealthBy: (state, action) => {
            if ( state.playerHealth + action.payload > state.maxPlayerHealth ) {
                state.playerHealth = state.maxPlayerHealth;
            } else {
                state.playerHealth += action.payload;
            }
        },
        decreaseHealthBy: (state, action) => {
            console.log("current health: " + state.playerHealth);
            console.log("damage: " + action.payload);
            let damage = +action.payload;
            if ( state.playerHealth - damage < 0 ) {
                state.playerHealth = 0;
            } else {
                state.playerHealth -= damage;
            }
            console.log("new current health: " + state.playerHealth);
        },
        resetPlayerLevel: (state) => {
            state.playerLevel = 1;
        },
        incrementPlayerLevel: (state) => {
            state.playerLevel += 1;
        },
    },
});

export const { 
    setMaxPlayerHealth, 
    increaseMaxHealthBy, 
    setPlayerHealth, 
    increaseHealthBy, 
    decreaseHealthBy, 
    resetPlayerLevel, 
    incrementPlayerLevel
} = playerSlice.actions;

export default playerSlice.reducer;