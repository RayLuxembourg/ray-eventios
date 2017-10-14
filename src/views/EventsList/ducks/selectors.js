import { createSelector } from "reselect";
import isAfter from "date-fns/is_after";
const eventListIdsSelector = state =>
  state
    .get("events")
    .get("ids")
    .toArray();
const eventListSelector = state =>
  state
    .get("events")
    .get("all")
    .toObject();

export const futureEventsSelector = createSelector(
  eventListIdsSelector,
  eventListSelector,
  (ids, events) =>
    ids.filter(id => isAfter(events[id].startsAt, new Date().getDate()))
);
export const pastEventsSelector = createSelector(
  eventListIdsSelector,
  eventListSelector,
  (ids, events) =>
    ids.filter(id => !isAfter(events[id].startsAt, new Date().getDate()))
);
export const allEventsSelector = createSelector(
  eventListSelector,
  events => events
);
export const allEventsIdSelector = createSelector(
  eventListIdsSelector,
  ids => ids
);