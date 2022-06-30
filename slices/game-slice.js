import { createSlice } from "@reduxjs/toolkit";

const LOG_SIZE_LIMIT = 70;

const initialState = {
    gameStatus: 'playing',  // 'win', 'lose', 'surrender'
    logMessages: [],
    initialized: false,
};

export const gameSlice = createSlice ({
    name: 'game',
    initialState,
    reducers: {
        setGameStatus: (state, action) => {
            console.log("setting gameStatus to: " + action.payload);
            state.gameStatus = action.payload;
        },
        addLogMessage: (state, action) => {
            console.log(action.payload);
            state.logMessages.unshift(action.payload);
            if ( state.logMessages.length >= LOG_SIZE_LIMIT ) {
                console.log("shrinking log");
                state.logMessages.splice(state.logMessages.length/2);
            }
        },
        setInit: (state) => {
            state.initialized = true;
        },
    },
});

export const { 
    setGameStatus,
    addLogMessage,
    setInit,
} = gameSlice.actions;

export default gameSlice.reducer;