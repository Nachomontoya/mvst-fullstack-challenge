import React from "react";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/types";
import { setMode } from "../../redux/mode/actions";

function ThemeToggle(): React.ReactElement {
  const {
    mode: { isDark },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleMode = () => {
    dispatch(setMode());
  };

  return (
    <div className="d-flex justify-content-between gap-1">
      <img src={sun} alt="light mode" className="difference" />
      <div className="form-check form-switch p-0">
        <input
          className="form-check-input ms-0"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          onChange={handleMode}
          checked={isDark}
        />
      </div>
      <img src={moon} alt="dark mode" className="difference" />
    </div>
  );
}

export default ThemeToggle;
