import { createSelector } from "reselect";

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
const userIdSelector = state =>
  state
    .get("auth")
    .get("user")
    .toJS().id;

export const attendingEventsSelector = createSelector(
  eventListIdsSelector,
  eventListSelector,
  userIdSelector,
  (ids, events, userId) =>
    ids.filter(id => events[id].attendees.indexOf(userId) !== -1)
);
export const ownerEventsSelector = createSelector(
  eventListIdsSelector,
  eventListSelector,
  userIdSelector,
  (ids, events, userId) => ids.filter(id => events[id].owner.id === userId)
);
export const allEventsSelector = createSelector(
  eventListSelector,events => events
)