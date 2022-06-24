import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameStatus: 'playing',  // 'win', 'lose', 'surrender'
};

export const gameSlice = createSlice ({
    name: 'game',
    initialState,
    reducers: {
        setGameStatus: (state, action) => {
            console.log("setting gameStatus to: " + action.payload);
            state.gameStatus = action.payload;
        }
    },
});

export const { 
    setGameStatus,
} = gameSlice.actions;

export default gameSlice.reducer;