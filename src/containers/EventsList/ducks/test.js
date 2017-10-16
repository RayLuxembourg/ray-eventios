import * as types from "./types";
import { getEvents, createEvent, attendEvent, unAttendEvent } from "./actions";
import * as reducer from "./reducer";
import { Map, List } from "immutable";
import mockdata from "../../../mock/events";
describe("actions", () => {
  it("should create an action to get events", () => {
    const expectedAction = {
      type: types.GET_EVENTS
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
describe("EventsList reducer", () => {
  const events = {
    type: types.GET_EVENTS_SUCCESS,
    payload: mockdata
  };
  it("should return the initial state", () => {
    expect(reducer.default(List(), List())).toEqual(List());
  });
  it("should return the GET_EVENTS_SUCCESS all events", () => {
    expect(reducer.default(Map(), events).get("all")).toEqual(
      Map(mockdata.entities.events)
    );
  });
  it("should return the GET_EVENTS_SUCCESS all ids", () => {
    expect(reducer.default(Map(), events).get("ids")).toEqual(
      List(mockdata.result)
    );
  });
});
// describe('EventList reducer', () => {

//   it('should handle GET_EVENTS');
//   it('should handle UPDATE_EVENT');
//   it('should handle ATTEND_EVENT');
//   it('should handle UNATTEND_EVENT');
// });
