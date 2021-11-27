import store from "../redux/store";

export type ReduxState = {
  isDark: boolean;
};

export type CurrentTimer = {
  time: number;
  timeString: string;
};

export type SetAccumulatedTime = {
  setAccTime: React.Dispatch<
    React.SetStateAction<{
      time: number;
      timeString: string;
    }>
  >;
};

export type AccTime = {
  time: number;
  timeString: string;
};

export type ChildrenProps = { children: React.ReactChild | React.ReactChild[] };

export type RootState = ReturnType<typeof store.getState>;
