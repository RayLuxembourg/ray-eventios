import * as types from "./types";
import { getEvents, createEvent, attendEvent, unAttendEvent } from "./actions";
import * as reducer from "./reducer";
import { Map, List } from "immutable";
import mockdata from "../../../mock/events";
import singleEventMock from "../../../mock/event";

import {normlizeEventList,normlizeEvent} from "./schema";
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
  const data = normlizeEventList(mockdata);
  const singleEvents = normlizeEvent(singleEventMock);
  const getEvenst = {
    type:types.GET_EVENTS
  }
  const events = {
    type: types.GET_EVENTS_SUCCESS,
    payload: data
  };
  const attend = {
    type: types.ATTEND_EVENT_SUCCESS,
    payload: singleEvents
  }
  it("should return the initial state", () => {
    expect(reducer.default(List(), List())).toEqual(List());
  });
  it("should return loading true on GET_EVENTS", () => {
    expect(reducer.default(undefined, getEvenst).get("loading")).toEqual(true);
  });
  it("should return loading false on GET_EVENTS_SUCCESS", () => {
    expect(reducer.default(undefined, events).get("loading")).toEqual(false);
  });
  it("should return the GET_EVENTS_SUCCESS all events", () => {
    expect(reducer.default(undefined, events).get("all")).toEqual(
      Map(data.entities.events)
    );
  });
  it("should return the GET_EVENTS_SUCCESS all ids", () => {
    expect(reducer.default(undefined, events).get("ids")).toEqual(
      List(data.result)
    );
  });
  it("should return the GET_EVENTS_SUCCESS all attendees", () => {
    expect(reducer.default(undefined, events).get("attendees")).toEqual(
      Map(data.entities.attendees)
    );
  });
  it("should return updated state ATTEND_EVENT", () => {
    expect(reducer.default(undefined, attend).get("attendees")).toEqual(
      Map(singleEvents.entities.attendees)
    );
  });  
});
