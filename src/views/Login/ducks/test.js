import * as types from "./types";
import { login } from "./actions";
import * as reducer from "./reducer";
import { Map } from "immutable";

describe("actions", () => {
  it("should create an action to login", () => {
    const user = {};
    const expectedAction = {
      type: types.LOGIN,
      payload: user
    };
    expect(login(user)).toEqual(expectedAction);
  });
});
describe("Login reducer", () => {
  const loginStart = {
    type: types.LOGIN
  };
  const data = { id: 2, name: "test" };
  const loginSuccess = {
    type: types.LOGIN_SUCCESS,
    payload: data
  };
  it("should return the loading true", () => {
    expect(reducer.default(undefined, loginStart).get("loading")).toEqual(true);
  });
  it("should return the loading false", () => {
    expect(reducer.default(undefined, loginSuccess).get("loading")).toEqual(
      false
    );
  });
  it("should return immutable user map", () => {
    expect(reducer.default(undefined, loginSuccess).get("user")).toEqual(
      Map(data)
    );
  });
  it("should return success true on user creation", () => {
    expect(reducer.default(undefined, loginSuccess).get("success")).toEqual(
      true
    );
  });
});
