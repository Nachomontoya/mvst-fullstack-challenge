import { combineReducers } from "redux";
import modeReducer from "./mode/reducer";

const reducers = combineReducers({
  mode: modeReducer,
});

export default reducers;
