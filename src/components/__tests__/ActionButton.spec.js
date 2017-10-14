import React from "react";
import { ActionButton } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("ActionButton component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<ActionButton />);
    expect(Error).toMatchSnapshot();
  });
});
