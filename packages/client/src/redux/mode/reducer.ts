import { SET_MODE } from "./types";
import { AnyAction } from "redux";

import initialState from "./state";
import { ReduxState } from "../../utils/types";

const reducer = (state = initialState, action: AnyAction): ReduxState => {
  switch (action.type) {
    case SET_MODE:
      return { isDark: !state.isDark };
  }
  return state;
};

export default reducer;
