import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { getTotalTime } from "../../api/timerApi";
import { secondsToString } from "../../utils/formater";
import { AccTime } from "../../utils/types";

function TotalTime(): React.ReactElement {
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
      setAccTime({
        time: totalTime[0].totalTime,
        timeString: secondsToString(totalTime[0].totalTime),
      });
    } catch (error: any) {
      if (error.response?.status === 429) alert(error.response?.data);
      else console.log(error.response?.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadTotalTime();
  }, []);

  return (
    <div className="h-50 d-flex justify-content-center">
      {isLoading ? (
        <Loader type="ThreeDots" color="#ffffff" height={44} width={40} />
      ) : (
        <h1 className="mb-4">{accTime.timeString}</h1>
      )}
    </div>
  );
}

export default TotalTime;
