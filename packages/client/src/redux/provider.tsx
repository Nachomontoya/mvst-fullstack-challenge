import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ChildrenProps } from "../utils/types";
import store from "./store";

const Provider = ({ children }: ChildrenProps): React.ReactElement => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export default Provider;
