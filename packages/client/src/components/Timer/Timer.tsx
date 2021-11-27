import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { getTotalTime } from "../../api/timerApi";
import { secondsToString } from "../../utils/formater";
import { AccTime } from "../../utils/types";
import TimerButton from "../TimerButton";
import { toast } from "react-toastify";

function Timer(): React.ReactElement {
  const [isLoading, setIsLoading] = useState(false);
  const [accTime, setAccTime] = useState<AccTime>({
    time: 0,
    timeString: "00:00:00",
  });

  const loadTotalTime = async () => {
    setIsLoading(true);
    try {
      const {
        data: { totalTime },
      } = await getTotalTime();
      if (totalTime.length) {
        setAccTime({
          time: totalTime[0]?.totalTime,
          timeString: secondsToString(totalTime[0]?.totalTime),
        });
      }
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

  useEffect(() => {
    loadTotalTime();
  }, []);

  return (
    <>
      <div className="h-50 d-flex justify-content-center">
        {isLoading ? (
          <Loader type="ThreeDots" color="#ffffff" height={44} width={40} />
        ) : (
          <h1 className="mb-4">{accTime.timeString}</h1>
        )}
      </div>
      <TimerButton setAccTime={setAccTime} />
    </>
  );
}

export default Timer;
