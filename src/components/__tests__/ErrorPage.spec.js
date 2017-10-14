import React from "react";
import { ErrorPage } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<ErrorPage />);
    expect(Error).toMatchSnapshot();
  });
});
