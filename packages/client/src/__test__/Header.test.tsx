import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../components/Header";
import Provider from "../redux/provider";

describe("Render Header", () => {
  afterEach(cleanup);

  render(
    <Provider>
      <Header />
    </Provider>,
  );

  test("Header is rendered with the logo and the switch", () => {
    const header = screen.getByTestId("header-test");
    const logo = screen.getByTestId("logo");
    const switchToggle = screen.getByTestId("switch-test");
    expect(header).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(switchToggle).toBeInTheDocument();
  });
});
