import {logger} from "redux-logger";
import {configureStore} from "@reduxjs/toolkit";
import balanceReducer from "./reducers/balanceReducer";
import quoteReducer from "./reducers/quoteReducer";

const initialState = {
    balance: 10000,
    quote: 'He-he-he'
}

const store = configureStore
(
    {
        preloadedState: initialState,
        reducer: {
            balance: balanceReducer,
            quote: quoteReducer,
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(logger)
    });

export default store;