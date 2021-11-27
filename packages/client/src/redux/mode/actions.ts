import { AnyAction } from "redux";
import { SET_MODE } from "./types";

export const setMode = (): AnyAction => ({
  type: SET_MODE,
});
