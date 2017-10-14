import React from "react";
import { Col } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<Col />);
    expect(Error).toMatchSnapshot();
  });
});
