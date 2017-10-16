import * as types from "./types";
import { getEventsById, attendEvent, unAttendEvent } from "./actions";

describe("actions", () => {
  it("should create an action to get even by id", () => {
    const id = 13;
    const expectedAction = {
      type: types.GET_EVENT_BY_ID,
      payload: id
    };
    expect(getEventsById(id)).toEqual(expectedAction);
  });
  it("should create an action to attend event ", () => {
    const id = 11;
    const expectedAction = {
      type: types.ATTEND_EVENT,
      payload: id
    };
    expect(attendEvent(id)).toEqual(expectedAction);
  });
  it("should create an action to unattend event", () => {
    const id = 7;
    const expectedAction = {
      type: types.UNATTEND_EVENT,
      payload: id
    };
    expect(unAttendEvent(id)).toEqual(expectedAction);
  });
});
