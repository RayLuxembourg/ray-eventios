import React from "react";
import { Input } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<Input />);
    expect(Error).toMatchSnapshot();
  });
});
