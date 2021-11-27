import React, { useEffect, useState } from "react";

import play from "../../assets/play_btn.svg";
import stop from "../../assets/stop_btn.svg";

import { secondsToString } from "../../utils/formater";
import { createNewTime, getTotalTime } from "../../api/timerApi";
import { CurrentTimer } from "../../utils/types";

function TimerButton(): React.ReactElement {
  const [isLoading, setIsLoading] = useState(false);
  const [running, setRunning] = useState<boolean>(false);

  const [timerBtn, setTimerBtn] = useState<CurrentTimer>({
    time: 0,
    timeString: "00:00:00",
  });

  const startChrono = () => {
    setTimerBtn((prevState) => ({
      time: prevState.time + 1,
      timeString: secondsToString(prevState.time + 1),
    }));
  };

  console.log(timerBtn);

  // const stopChrono = () => {
  //   setTimerBtn({
  //     icon: play,
  //     time: 0,
  //     timeString: "00:00:00",
  //   });
  // };

  // const createNewLog = async () => {
  //   setIsLoading(true);
  //   try {
  //     await createNewTime(totalTimer.time);
  //   } catch (error: any) {
  //     console.log(error.response.data);
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(startChrono, 1000);
    if (!running) {
      clearInterval(interval);
      // stopChrono();
      // setTotalTimer({ ...totalTimer, time: currentTimer.time });
    }
    return () => {
      clearInterval(interval);
    };
  }, [running]);

  // useEffect(() => {
  //   setTimerBtn({
  //     ...timerBtn,
  //     timeString: secondsToString(timerBtn.time),
  //   });
  // }, [currentTimer.time]);

  // useEffect(() => {
  //   if (totalTimer.time > 0) {
  //     createNewLog();
  //     loadTotalTime();
  //   }
  // }, [totalTimer.time]);

  return (
    <>
      <button
        type="button"
        className="btn btn-light w-152"
        onClick={() => setRunning(!running)}
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
