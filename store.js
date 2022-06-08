import { configureStore } from '@reduxjs/toolkit'
import playerSlice from './slices/playerSlice';
import enemyBoardSlice from './slices/enemyBoardSlice';

const store = configureStore({
    reducer: {
        player: playerSlice,
        enemyBoard: enemyBoardSlice,
    },
})

export default store;