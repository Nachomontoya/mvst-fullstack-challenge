import store from "../redux/store";

export type ReduxState = {
  isDark: boolean;
};

export type ChildrenProps = { children: React.ReactChild | React.ReactChild[] };

export type RootState = ReturnType<typeof store.getState>;
