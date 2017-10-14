import React from "react";
import { DashboardLayout } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<DashboardLayout />);
    expect(Error).toMatchSnapshot();
  });
});
