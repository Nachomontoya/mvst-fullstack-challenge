import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

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
    } catch (error) {
      let errorMessage: string;
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = String(error);
      }
      toast(errorMessage, {
        type: "error",
      });
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
    setAccTime((prevState) => {
      console.log(prevState);
      return {
        time: prevState.time + timerBtn.time,
        timeString: secondsToString(prevState.time + timerBtn.time),
      };
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

  const ColorButton = styled(Button)<ButtonProps>(() => ({
    color: "#000",
    backgroundColor: "#d4d4d4",
    "&:hover": {
      backgroundColor: "#b7b7b7",
    },
    fontFamily: "inherit",
    fontSize: "16px",
    fontWeight: 400,
  }));

  return (
    <>
      <ColorButton
        variant="contained"
        startIcon={
          <img
            src={running ? stop : play}
            alt={running ? "stop" : "play"}
            className=" difference"
          />
        }
        onClick={handleRunning}
        disabled={isLoading}
      >
        {timerBtn.timeString}
      </ColorButton>
    </>
  );
}

export default TimerButton;
