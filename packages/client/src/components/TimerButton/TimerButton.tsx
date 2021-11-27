import React, { useEffect, useState } from "react";

import play from "../../assets/play_btn.svg";
import stop from "../../assets/stop_btn.svg";

import { secondsToString } from "../../utils/formater";
import { createNewTime } from "../../api/timerApi";
import { CurrentTimer, SetAccumulatedTime } from "../../utils/types";

function TimerButton({ setAccTime }: SetAccumulatedTime): React.ReactElement {
  const [isLoading, setIsLoading] = useState(false);
  const [running, setRunning] = useState<boolean>(false);
  const [timerBtn, setTimerBtn] = useState<CurrentTimer>({
    time: 0,
    timeString: "00:00:00",
  });

  const createNewLog = async (time: number) => {
    setIsLoading(true);
    try {
      await createNewTime(time);
    } catch (error: any) {
      console.log(error.response.data);
    }
    setIsLoading(false);
  };

  const startChrono = () => {
    setTimerBtn((prevState) => ({
      time: prevState.time + 1,
      timeString: secondsToString(prevState.time + 1),
    }));
  };

  const stopChrono = () => {
    setTimerBtn({
      time: 0,
      timeString: "00:00:00",
    });
    createNewLog(timerBtn.time);
    setAccTime({
      time: timerBtn.time,
      timeString: secondsToString(timerBtn.time),
    });
  };

  const handleRunning = () => {
    if (running) {
      stopChrono();
    }
    setRunning(!running);
  };

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(startChrono, 1000);
    if (!running) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [running]);

  return (
    <>
      <button
        type="button"
        className="btn btn-light w-152"
        onClick={handleRunning}
        disabled={isLoading}
      >
        <img
          src={running ? stop : play}
          alt={running ? "stop" : "play"}
          className="me-2 mb-1 difference"
        />
        {timerBtn.timeString}
      </button>
    </>
  );
}

export default TimerButton;
