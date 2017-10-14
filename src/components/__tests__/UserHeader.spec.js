import React from "react";
import { UserHeader } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<UserHeader />);
    expect(Error).toMatchSnapshot();
  });
});
