import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/Counter"
const store = configureStore({
    reducer:{
        counter:counterReducer,
    },
});

export default store;