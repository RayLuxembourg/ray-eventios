import { Map, List } from "immutable";
import {
  GET_EVENTS,
  GET_EVENTS_SUCCES,
  GET_EVENTS_FAIL,
  POST_EVENTS,
  POST_EVENTS_SUCCES,
  POST_EVENTS_FAIL,
  UPDATE_EVENT,
  UPDATE_EVENT_SUCCES,
  UPDATE_EVENT_FAIL,
  ATTEND_EVENT,
  ATTEND_EVENT_SUCCESS,
  UNATTEND_EVENT,
  UNATTEND_EVENT_SUCCESS
} from "./types";

const initialState = Map({
  loading: false,
  error: null,
  ids: List(),
  all: Map(),
  attendees: Map()
});
const onStart = { loading: true, error: null };
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_EVENTS:
      return state.merge(onStart);
    case GET_EVENTS_SUCCES:
      return state.merge({
        loading: false,
        all: Map(action.payload.entities.events),
        attendees: Map(action.payload.entities.attendees),
        ids: List(action.payload.result)
      });
    case GET_EVENTS_FAIL:
      return state.merge({ error: true });
    case UPDATE_EVENT_SUCCES:
    return state.merge({
      all: state
        .get("all")
        .set([action.payload.result.id], action.payload.result)
    }); 
    case POST_EVENTS_SUCCES:
      return state.merge({
        all: state.get("all").set([action.payload.result.id], action.payload.result)
      });
    case ATTEND_EVENT:
      return state.merge(onStart);
    case ATTEND_EVENT_SUCCESS:
      return state.merge({
        all: state
          .get("all")
          .set([action.payload.result.id], action.payload.result)
      });

    case UNATTEND_EVENT:
      return state.merge(onStart);

    case UNATTEND_EVENT_SUCCESS:
      return state.merge({
        all: state
          .get("all")
          .set([action.payload.result.id], action.payload.result)
      });
    default:
      return state;
  }
}
