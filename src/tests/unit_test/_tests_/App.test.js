import React from "react";
import { shallow } from "enzyme";
import App from "../../../App";

describe("Test basic App component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
