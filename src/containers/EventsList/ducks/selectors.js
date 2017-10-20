import { createSelector } from "reselect";
import isAfter from "date-fns/is_after";
const selectLoading = state => state.get("events").get("loading");
const selectEventsIds = state =>
  state
    .get("events")
    .get("ids")
    .toArray();
const selectAllEvents = state =>
  state
    .get("events")
    .get("all")
    .toObject();

export const futureEventsSelector = createSelector(
  selectEventsIds,
  selectAllEvents,
  (ids, events) =>
    ids.filter(id => isAfter(events[id].startsAt, new Date().getDate()))
);
export const pastEventsSelector = createSelector(
  selectEventsIds,
  selectAllEvents,
  (ids, events) =>
    ids.filter(id => !isAfter(events[id].startsAt, new Date().getDate()))
);
export const allEventsSelector = createSelector(
  selectAllEvents,
  events => events
);
export const allEventsIdSelector = createSelector(selectEventsIds, ids => ids);
export const loadingSelector = createSelector(
  selectLoading,
  loading => loading
);
