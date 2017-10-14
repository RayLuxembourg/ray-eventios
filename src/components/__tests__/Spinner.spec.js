import React from "react";
import { Spinner } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<Spinner />);
    expect(Error).toMatchSnapshot();
  });
});
