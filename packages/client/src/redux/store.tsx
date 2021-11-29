import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loadLocalStorage, setLocalStorage } from "../utils/localStorage";
import modeInitialState from "./mode/state";

import CombinedReducers from "./reducers";

const appliedMiddleware = composeWithDevTools(applyMiddleware(thunk));

const ls = { mode: loadLocalStorage("THEME_MODE", modeInitialState) };

const store = createStore(CombinedReducers, ls, appliedMiddleware);

store.subscribe(() => setLocalStorage("THEME_MODE", store.getState().mode));

export default store;
