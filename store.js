import { configureStore } from '@reduxjs/toolkit'
import playerSlice from './slices/player-slice';
import enemyBoardSlice from './slices/enemy-board-slice';
import gameSlice from './slices/game-slice';

const store = configureStore({
    reducer: {
        player: playerSlice,
        enemyBoard: enemyBoardSlice,
        game: gameSlice,
    },
})

export default store;