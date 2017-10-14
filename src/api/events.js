import {get,post,patch,delete as del} from "axios";
export default (baseUrl) =>({
    getEvents(){
        return get(`${baseUrl}/events`);
    },
    getEventsById(id){
        return get(`${baseUrl}/events/${id}`);
    },
    postNewEvent(event){
        return post(`${baseUrl}/events`,event);
    },
    updateEvent(id,data){
        return patch(`${baseUrl}/events/${id}`,data);
    },
    deleteEvent(id){
        return del(`${baseUrl}/events/${id}`);
    },
    attendEvent(id){
        return post(`${baseUrl}/events/${id}/attendees/me`);        
    },
    unAttendEvent(id){
        return del(`${baseUrl}/events/${id}/attendees/me`);        
    }
});