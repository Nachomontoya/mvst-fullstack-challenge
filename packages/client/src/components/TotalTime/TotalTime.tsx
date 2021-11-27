import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { TotalTime } from "../../utils/types";

function TotalTime(): React.ReactElement {
  const [isLoading, setIsLoading] = useState(false);
  const [totalTime, setTotalTime] = useState<TotalTime>({
    time: 0,
    timeString: "00:00:00",
  });

  return (
    <div className="h-50 d-flex justify-content-center">
      {isLoading ? (
        <Loader type="ThreeDots" color="#ffffff" height={44} width={40} />
      ) : (
        <h1 className="mb-4">{totalTimer.timeString}</h1>
      )}
    </div>
  );
}

export default TotalTime;
