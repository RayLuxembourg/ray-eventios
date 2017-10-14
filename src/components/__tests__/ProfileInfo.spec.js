import React from "react";
import { ProfileInfo } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<ProfileInfo />);
    expect(Error).toMatchSnapshot();
  });
});
