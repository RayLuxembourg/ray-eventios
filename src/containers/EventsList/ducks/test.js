import * as types from "./types";
import { getEvents, createEvent, attendEvent, unAttendEvent } from "./actions";
import * as reducer from "./reducer";
import {Map} from "immutable";
describe("actions", () => {
  it("should create an action to get events", () => {
    const expectedAction = {
      type: types.GET_EVENTS,
    };
    expect(getEvents()).toEqual(expectedAction);
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
  it("should create an action to create new event", () => {
    const event = {};
    const expectedAction = {
      type: types.CREATE_EVENT,
      payload: event
    };
    expect(createEvent(event)).toEqual(expectedAction);
  });
});

// describe("EventsList reducer", () => {
//     it("should handle get events", () => {
//         const user = Map({
//             ids:Map
//         })
//       expect(
//           reducer.default(Map(),{
//             type: types.GET_EVENTS,
//             payload:1
//           })
//       ).toEqual(1)
//     });
//   });
  