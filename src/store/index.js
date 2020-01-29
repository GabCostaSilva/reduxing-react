import { createStore } from "redux";

import theReducer from "./reducers";

const store = createStore(theReducer);

export default store;
