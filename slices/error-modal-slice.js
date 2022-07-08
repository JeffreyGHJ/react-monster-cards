import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
};

export const errorModalSlice = createSlice ({
    name: 'errorModal',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload
        }
    },
});

export const { 
    setError
} = errorModalSlice.actions;

export default errorModalSlice.reducer;