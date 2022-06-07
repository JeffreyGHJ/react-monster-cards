import { configureStore } from '@reduxjs/toolkit'
import enemyBoardSlice from './slices/enemyBoardSlice';
import playerSlice from './slices/playerSlice'

const store = configureStore({
    reducer: {
        player: playerSlice,
        enemyBoard: enemyBoardSlice,
    },
})

export default store;