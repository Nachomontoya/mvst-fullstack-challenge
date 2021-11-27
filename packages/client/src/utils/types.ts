import store from "../redux/store";

export type ReduxState = {
  isDark: boolean;
};

export type CurrentTimer = {
  icon: string;
  time: number;
  timeString: string;
};

export type TotalTime = {
  time: number;
  timeString: string;
};

export type ChildrenProps = { children: React.ReactChild | React.ReactChild[] };

export type RootState = ReturnType<typeof store.getState>;
