import React from "react";
import { Event } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<Event />);
    expect(Error).toMatchSnapshot();
  });
});
