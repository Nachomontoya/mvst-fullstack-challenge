import React, { useState } from "react";
import Header from "../Header";

type Props = {
  children: JSX.Element | string;
};

function Layout({ children }: Props) {
  const [darkMode, setDarkMode] = useState(false);

  const handleMode = () => {
    setDarkMode((prevState) => {
      return !prevState;
    });
  };

  return (
    <div
      className={`p-4 w-100 min-vh-100 d-flex flex-column ${
        darkMode ? "bg-dark" : "bg-white"
      }`}
    >
      <Header onChange={handleMode} mode={darkMode} />
      <main className="col-12 mt-auto mb-auto d-flex justify-content-center">
        {children}
      </main>
    </div>
  );
}

export default Layout;
