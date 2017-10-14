import React from "react";
import { UserMenu } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<UserMenu />);
    expect(Error).toMatchSnapshot();
  });
});
