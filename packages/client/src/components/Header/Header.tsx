import React from "react";

import logo from "../../assets/MVSTLogo.svg";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

type Props = {
  onChange: boolean | any;
  mode: boolean;
};

function Header({ onChange, mode }: Props) {
  const handleChange = onChange;

  return (
    <header className="col-12 mb-2 d-flex justify-content-between">
      <img src={logo} alt="MVST" className="difference" />
      <div className="d-flex justify-content-between gap-1">
        <img src={sun} alt="light mode" className="difference" />
        <div className="form-check form-switch p-0">
          <input
            className="form-check-input ms-0"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onChange={handleChange}
            checked={mode}
          />
        </div>
        <img src={moon} alt="dark mode" className="difference" />
      </div>
    </header>
  );
}

export default Header;
