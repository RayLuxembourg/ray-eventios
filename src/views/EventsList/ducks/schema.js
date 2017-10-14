import { schema, normalize } from "normalizr";

// OK
const eventListSchema = new schema.Entity('events',{
    attendees: [new schema.Entity('attendees')]

});
const eventSchema = new schema.Object({attendees:[new schema.Entity('attendees')]});

// or use shorthand syntax:
const eventsSchema = [ eventListSchema ];
export const normlizeEventList = data => normalize(data, eventsSchema);
export const normlizeEvent = data => normalize(data, eventSchema);
