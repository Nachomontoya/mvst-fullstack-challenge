import React from "react";
import Home from "./pages/Home";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

import "./App.scss";

function App(): React.ReactElement {
  return (
    <HelmetProvider>
      <Helmet defaultTitle="MVST Challenge">
        <meta
          name="description"
          content="MVST Timer Challenge by Nacho Montoya"
        />
      </Helmet>
      <Home />
      <ToastContainer draggable theme="colored" />
    </HelmetProvider>
  );
}

export default App;
