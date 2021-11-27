import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import CombinedReducers from "./reducers";

const appliedMiddleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(CombinedReducers, appliedMiddleware);

export default store;
