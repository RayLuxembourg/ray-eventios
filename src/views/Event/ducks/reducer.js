import { Map, List } from "immutable";
import {
  GET_EVENT_BY_ID,
  GET_EVENT_BY_ID_SUCCESS,
  GET_EVENT_BY_ID_FAIL,
  ATTEND_EVENT,
  ATTEND_EVENT_SUCCESS,
  ATTEND_EVENT_FAIL,
  UNATTEND_EVENT,
  UNATTEND_EVENT_SUCCESS,
  UNATTEND_EVENT_FAIL
} from "./types";

const initialState = Map({
  loading: false,
  error: null,
  event: Map(),
  attendees:Map()
});
const onStart = { loading: true, error: null };
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_EVENT_BY_ID:
      return state.merge(onStart);
    case GET_EVENT_BY_ID_SUCCESS:
      return state.merge({
        loading: "false",
        event: Map(action.payload.result),
        attendees: Map(action.payload.entities.attendees)
      });
    case GET_EVENT_BY_ID_FAIL:
      return state.merge({ error: true, loading: false });

    case ATTEND_EVENT:
      return state.merge(onStart);

    case ATTEND_EVENT_SUCCESS:
    case UNATTEND_EVENT_SUCCESS:
    console.log(action.payload);
      return state.merge({
        event:Map(action.payload.result),
        attendees:Map(action.payload.entities.attendees),
        loading:false
      });
    case ATTEND_EVENT_FAIL:
      return state.merge({ error: true, loading: false });

    case UNATTEND_EVENT:
      return state.merge(onStart);


    case UNATTEND_EVENT_FAIL:
      return state.merge({ error: true, loading: false });
    default:
      return state;
  }
}
