import { useEffect, useState } from "react";

import play from "../../assets/play_btn.svg";
import stop from "../../assets/stop_btn.svg";

import { secondsToString } from "../../utils/formater";
import { createNewTime, getTotalTime } from "../../api/timerApi";
import Header from "../../components/Header";

type CurrentTimer = {
  icon: string;
  time: number;
  timeString: string;
};

type TotalTimer = {
  time: number;
  timeString: string;
};

function Home(): JSX.Element {
  const [darkMode, setDarkMode] = useState(false);
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

  const handleMode = () => {
    setDarkMode((prevState) => {
      return !prevState;
    });
  };

  const startChrono = () => {
    setCurrentTimer((prevState) => {
      return {
        ...currentTimer,
        icon: stop,
        time: prevState.time++,
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
    } catch (error) {
      console.log(error);
    }
  };

  const createNewLog = async () => {
    try {
      await createNewTime(totalTimer.time);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTotalTime();
  }, []);

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

  useEffect(() => {
    if (running) {
      setCurrentTimer({ ...currentTimer, icon: stop });
      const interval: number = window.setInterval(startChrono, 1000);
      return () => {
        clearInterval(interval);
        stopChrono();
      };
    }
    setTotalTimer({ ...totalTimer, time: currentTimer.time });
  }, [running]);

  return (
    <div
      className={`p-4 w-100 min-vh-100 d-flex flex-column ${
        darkMode ? "bg-dark" : "bg-white"
      }`}
    >
      <Header onChange={handleMode} mode={darkMode} />
      <main className="col-12 mt-auto mb-auto d-flex justify-content-center">
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
      </main>
    </div>
  );
}

export default Home;
