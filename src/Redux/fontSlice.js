import { createSlice } from '@reduxjs/toolkit';

export const fontSlice = createSlice({
    name: "font",
    initialState: {
        activeFont: "Serif"
    },

    reducers: {
        newFont: (state, action) => {
            state.activeFont = action.payload.newActiveFont;
        }
    }
})

export const { newFont } = fontSlice.actions;

export default fontSlice.reducer;