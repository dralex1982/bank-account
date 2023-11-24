import Store from "./Store";
import accountReducer from "./accountReducer";

const initialState = {balance: 10000};
const store = new Store(initialState, accountReducer);

export default store;