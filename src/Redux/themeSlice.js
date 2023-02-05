import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkTheme: false
    },

    reducers: {
        changeTheme: (state, action) => {
            state.isDarkTheme = action.payload.newTheme;
        }
    }
})

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;