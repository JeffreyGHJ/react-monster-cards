import { configureStore } from '@reduxjs/toolkit'
import playerSlice from './slices/player-slice';
import enemyBoardSlice from './slices/enemy-board-slice';

const store = configureStore({
    reducer: {
        player: playerSlice,
        enemyBoard: enemyBoardSlice,
    },
})

export default store;