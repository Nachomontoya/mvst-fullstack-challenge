import React from "react";
import logo from "../../assets/MVSTLogo.svg";

function Header(): React.ReactElement {
  return (
    <header className="col-12 mb-2 d-flex justify-content-between">
      <img src={logo} alt="MVST" className="difference" />
    </header>
  );
}

export default Header;
