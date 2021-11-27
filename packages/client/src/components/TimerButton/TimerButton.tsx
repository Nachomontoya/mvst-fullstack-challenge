import React, { useState } from "react";
import Loader from "react-loader-spinner";

import play from "../../assets/play_btn.svg";
import stop from "../../assets/stop_btn.svg";

import { secondsToString } from "../../utils/formater";
import { createNewTime, getTotalTime } from "../../api/timerApi";
import { CurrentTimer, TotalTimer } from "../../utils/types";

function Timer(): React.ReactElement {
  const [isLoading, setIsLoading] = useState(false);
  const [running, setRunning] = useState<boolean>(false);

  const [totalTimer, setTotalTimer] = useState<TotalTimer>({
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
      return {
        ...currentTimer,
        icon: stop,
        time: prevState.time + 1,
      };
    });
  };

  const stopChrono = () => {
    setCurrentTimer({
      icon: play,
      time: 0,
      timeString: "00:00:00",
    });
    loadTotalTime();
  };

  const loadTotalTime = async () => {
    setIsLoading(true);
    try {
      const {
        data: { totalTime },
      } = await getTotalTime();
      if (totalTime.length > 0)
        setTotalTimer({
          ...totalTimer,
          time: 0,
          timeString: secondsToString(totalTime[0].totalTime),
        });
    } catch (error: any) {
      if (error.response.status === 429) alert(error.response.data);
      else console.log(error.response.data);
    }
    setIsLoading(false);
  };

  const createNewLog = async () => {
    setIsLoading(true);
    try {
      await createNewTime(totalTimer.time);
    } catch (error: any) {
      console.log(error.response.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadTotalTime();
  }, []);

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(startChrono, 1000);
    setCurrentTimer({ ...currentTimer, icon: stop });
    if (!running) {
      clearInterval(interval);
      stopChrono();
      setTotalTimer({ ...totalTimer, time: currentTimer.time });
    }
    return () => {
      clearInterval(interval);
    };
  }, [running]);

  useEffect(() => {
    setCurrentTimer({
      ...currentTimer,
      timeString: secondsToString(currentTimer.time),
    });
  }, [currentTimer.time]);

  useEffect(() => {
    if (totalTimer.time > 0) {
      createNewLog();
      loadTotalTime();
    }
  }, [totalTimer.time]);

  return (
    <>
      <div className="h-50 d-flex justify-content-center">
        {isLoading ? (
          <Loader type="ThreeDots" color="#ffffff" height={44} width={40} />
        ) : (
          <h1 className="mb-4">{totalTimer.timeString}</h1>
        )}
      </div>
      <button
        type="button"
        className="btn btn-light w-152"
        onClick={() => setRunning(!running)}
        disabled={isLoading}
      >
        <img
          src={currentTimer.icon}
          alt={currentTimer.icon}
          className="me-2 mb-1 difference"
        />
        {currentTimer.timeString}
      </button>
    </>
  );
}

export default Timer;
