import accountReducer from "./accountReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk"
import {logger} from "redux-logger"

const initialState = {balance: 10000, quote: 'He-he-he...'};
const store = createStore(accountReducer, initialState, applyMiddleware(thunk, logger));


export default store;