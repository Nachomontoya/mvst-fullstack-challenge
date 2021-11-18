import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";

import play from "../../assets/play_btn.svg";
import stop from "../../assets/stop_btn.svg";

import { secondsToString } from "../../utils/formater";
import { getTotalTime, updateTotalTime } from "../../api/timerApi";

type CurrentTimer = {
  icon: string;
  time: number;
  timeString: string;
};

type TotalTimer = {
  timerId: string;
  time: number;
  timeString: string;
};

function Home(): JSX.Element {
  const [running, setRunning] = useState<boolean>(false);
  const [totalTimer, setTotalTimer] = useState<TotalTimer>({
    timerId: "",
    time: 0,
    timeString: "00:00:00",
  });

  const [currentTimer, setCurrentTimer] = useState<CurrentTimer>({
    icon: play,
    time: 0,
    timeString: "00:00:00",
  });

  const startChrono = () => {
    setCurrentTimer((prevState) => {
      return { ...currentTimer, icon: stop, time: prevState.time++ };
    });
  };

  const stopChrono = () => {
    setCurrentTimer({
      icon: play,
      time: 0,
      timeString: "00:00:00",
    });
  };

  const loadTotalTime = async () => {
    try {
      const {
        data: { data },
      } = await getTotalTime();
      setTotalTimer({
        timerId: data[0]._id,
        time: data[0].time,
        timeString: secondsToString(data[0].time),
      });
    } catch (error) {
      window.alert(error);
    }
  };

  useEffect(() => {
    loadTotalTime();
  }, []);

  useEffect(() => {
    if (running) {
      setCurrentTimer({ ...currentTimer, icon: stop });
      const interval: number = window.setInterval(startChrono, 1000);
      return () => {
        clearInterval(interval);
        stopChrono();
      };
    }
    //* this one is acumulating all the timers when the user stops the current timer;
    setTotalTimer((prevState) => {
      return {
        ...totalTimer,
        time: prevState.time + currentTimer.time,
      };
    });
    //TODO upload timerText to db;
  }, [running]);

  useEffect(() => {
    setCurrentTimer({
      ...currentTimer,
      timeString: secondsToString(currentTimer.time),
    });
  }, [currentTimer.time]);

  useEffect(() => {
    //* this one transform the number into a string to render in a more human mode;
    setTotalTimer({
      ...totalTimer,
      timeString: secondsToString(totalTimer.time),
    });
    updateTotalTime(totalTimer.time);
  }, [totalTimer.time]);

  return (
    <Layout>
      <div className="d-flex flex-column difference text-light">
        <h1 className="mb-4">{totalTimer.timeString}</h1>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => setRunning(!running)}
        >
          <img
            src={currentTimer.icon}
            alt={currentTimer.icon}
            className="me-2 mb-1 difference"
          />
          {currentTimer.timeString}
        </button>
      </div>
    </Layout>
  );
}

export default Home;
