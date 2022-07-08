import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notification: null,
};

export const notificationSlice = createSlice ({
    name: 'notification',
    initialState,
    reducers: {
        setNotification: (state, action) => {
            let notif = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
            state.notification = notif;
        },
        clearNotification: (state) => {
            state.notification = null;
        },
    },
});

export const { 
    setNotification,
    clearNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;