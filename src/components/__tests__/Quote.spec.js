import React from "react";
import { Quote } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<Quote />);
    expect(Error).toMatchSnapshot();
  });
});
