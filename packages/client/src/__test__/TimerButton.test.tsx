import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import TimerButton from "../components/TimerButton";

describe("Render Timer Button", () => {
  afterEach(cleanup);

  render(<TimerButton setAccTime={() => {}} />);

  test("Timer button is on the screen", () => {
    const buttonTest = screen.getByTestId("timer-btn");
    expect(buttonTest).toBeInTheDocument();
  });
});
