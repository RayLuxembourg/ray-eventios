import React from "react";
import { SidebarLayout } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<SidebarLayout />);
    expect(Error).toMatchSnapshot();
  });
});
