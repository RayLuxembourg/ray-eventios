import React from "react";
import { Attendees } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<Attendees />);
    expect(Error).toMatchSnapshot();
  });
});
