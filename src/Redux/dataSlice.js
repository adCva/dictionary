import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
    name: "word Data",
    initialState: {
        isFirstLoad: true,
        word: {}
    },

    reducers: {
        newWord: (state, action) => {
            state.isFirstLoad = false;
            state.errorLoadingWord = false;
            state.word = action.payload.def;
        }
    }
})

export const { newWord } = dataSlice.actions;

export default dataSlice.reducer;