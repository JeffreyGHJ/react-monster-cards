import { configureStore } from '@reduxjs/toolkit'
import playerSlice from './slices/player-slice';
import enemyBoardSlice from './slices/enemy-board-slice';
import gameSlice from './slices/game-slice';
import errorModalSlice from './slices/error-modal-slice';
import notificationSlice from './slices/notification-slice';

const store = configureStore({
    reducer: {
        player: playerSlice,
        enemyBoard: enemyBoardSlice,
        game: gameSlice,
        errorModal: errorModalSlice,
        notification: notificationSlice,
    },
})

export default store;