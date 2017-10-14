import React from "react";
import { Button } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<Button />);
    expect(Error).toMatchSnapshot();
  });
});
