import React from "react";
import { EventFilters } from "../";
import { shallow } from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<EventFilters />);
    expect(Error).toMatchSnapshot();
  });
});
