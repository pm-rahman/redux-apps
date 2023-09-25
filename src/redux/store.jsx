import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/Counter"
import logger from "./middleware/logger"
const store = configureStore({
    reducer:{
        counter:counterReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});

export default store;