import React from "react";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

import "./App.scss";

function App() {
  return (
    <>
      <Home />
      <ToastContainer draggable theme="colored" />
    </>
  );
}

export default App;
