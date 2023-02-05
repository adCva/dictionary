import { configureStore } from '@reduxjs/toolkit';
import dataSlice from "./Redux/dataSlice";
import themeSlice from "./Redux/themeSlice";
import fontSlice from "./Redux/fontSlice";


export default configureStore({
    reducer: {
        data: dataSlice,
        theme: themeSlice,
        font: fontSlice
    }
})