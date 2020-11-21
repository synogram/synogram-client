import React from "react";
import { shallow } from "enzyme";
import Layout from "../../../containers/Layouts/Layout";

describe("Test basic Layout component", () => {
  it("renders without crashing", () => {
    shallow(<Layout />);
  });
});
