import React from "react";
import { Input } from "../";
import { shallow } from "enzyme";
import {Field} from "redux-form";
// Enzyme.configure({ adapter: new Adapter() });
describe("Attendess component test", () => {
  test("renders without crashing", () => {
    const Error = shallow(<form><Field name={"title"} label={"Title"} type={"text"} component={Input} /></form>);
    expect(Error).toMatchSnapshot();
  });
});
