import React from "react";
import { Header } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<Header />);
    expect(Error).toMatchSnapshot();
  });
});
