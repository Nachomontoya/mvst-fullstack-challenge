import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";

import play from "../../assets/play_btn.svg";
import stop from "../../assets/stop_btn.svg";

import { intervalToString } from "../../utils/formater";

function Home(): JSX.Element {
  const [running, setRunning] = useState<boolean>(false);
  const [totalTime, setTotalTime] = useState<string>("00:00:00");
  const [currentTimer, setCurrentTimer] = useState<string>("00:00:00");
  const [summatory, setSummatory] = useState<number>(0);
  const [chronoState, setChronoState] = useState<{
    icon: string;
    currentTime: number;
  }>({
    icon: play,
    currentTime: 0,
  });

  const startChrono = () => {
    setChronoState((prevState) => {
      return { icon: prevState.icon, currentTime: prevState.currentTime++ };
    });
  };

  const stopChrono = () => {
    setChronoState({ icon: play, currentTime: 0 });
  };

  useEffect(() => {
    if (running) {
      setChronoState({ ...chronoState, icon: stop });
      const interval: number = window.setInterval(startChrono, 1000);
      return () => {
        clearInterval(interval);
        stopChrono();
      };
    }
    //* this one is acumulating all the timers when the user stops the current timer;
    setSummatory((prevState) => {
      return prevState + chronoState.currentTime;
    });
    //TODO upload timerText to db;
  }, [running]);

  useEffect(() => {
    setCurrentTimer(intervalToString(chronoState.currentTime));
  }, [chronoState.currentTime]);

  useEffect(() => {
    //* this one transform the number into a string to render in a more human mode;
    setTotalTime(intervalToString(summatory));
    console.log(summatory);
  }, [summatory]);

  return (
    <Layout>
      <div className="d-flex flex-column difference text-light">
        <h1 className="mb-4">{totalTime}</h1>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => setRunning(!running)}
        >
          <img
            src={chronoState.icon}
            alt={chronoState.icon}
            className="me-2 mb-1 difference"
          />
          {currentTimer}
        </button>
      </div>
    </Layout>
  );
}

export default Home;
