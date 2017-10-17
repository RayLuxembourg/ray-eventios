import React, { Component } from "react";
import { connect } from "react-redux";
import { Attendees, Col, Event } from "../../components";
import {
  getEventsById,
  attendeesSelector,
  eventByIdSelector,
  deleteEvent,
  attendEvent,
  unAttendEvent,
} from "./ducks";
import {updateEvent} from "../../containers/EventsList/ducks"
import EditEvent from "./EditEvent";
import { deleteIcon } from "../../assets";
class EventDetails extends Component {
  componentDidMount() {
    this.props.getEventsById(this.props.match.params.id);
  }
  mapAttendees(ids) {
    const { attendees } = this.props;
    const user = JSON.parse(localStorage.getItem("user"));
    return ids.map(id => (
      <Attendees.Item
        className={id === user.id ? "user-attendee" : ""}
        key={id}
      >
        {id === user.id
          ? "You"
          : attendees[id].firstName + " " + attendees[id].lastName}
      </Attendees.Item>
    ));
  }
  isOwner() {
    const event = this.props.event;
    const user = JSON.parse(localStorage.getItem("user"));
    return event.owner.id === user.id;
  }
  saveEdit(event) {
    const eventValue = event.toJS();
    const updatedEvent = {
      title: eventValue.title,
      description: eventValue.description,
      capacity: parseInt(eventValue.capacity),
      startsAt: new Date(`${eventValue.date} ${eventValue.time}`).toISOString()
    };
    this.props.updateEvent(this.props.match.params.id, updatedEvent);
    this.props.history.push("/");    
  }
  evenInfo(event) {
    const id = JSON.parse(localStorage.getItem("user")).id;    
    if (this.isOwner()) {
      return (
        <EditEvent
          saveEdit={eventValue => this.saveEdit(eventValue)}
          event={event}
        />
      );
    }
    return (
      <Event
        attend={this.props.attendEvent}
        unattend={this.props.unAttendEvent}
        event={event}
        id={id}
      />
    );
  }
  removeAndRedirect() {
    console.log(this.props);
    this.props.deleteEvent(this.props.match.params.id);
    this.props.history.push("/");
  }
  removeEvent() {
    if (this.isOwner()) {
      return (
        <span
          onClick={this.removeAndRedirect.bind(this)}
          style={{ float: "right", color: "#FF4081", cursor: "pointer" }}
        >
          <img style={{ marginRight: "10px" }} src={deleteIcon} alt="" />
          DELETE EVENT
        </span>
      );
    }
  }
  render() {
    const { match } = this.props;
    const { event, attendees } = this.props;

    if (event && event.id === match.params.id) {
      return (
        <div>
          <Col className={"event-id"} desktop={12} mobile={12}>
            DETAILS EVENT: #{event.id.toUpperCase()}
            {this.removeEvent()}
          </Col>
          <Col desktop={8} mobile={12}>
            {this.evenInfo(event)}
          </Col>
          <Col desktop={4} mobile={12} className={"attendees"}>
            <Attendees desktop={4} mobile={12}>
              <Attendees.Title>Attendees</Attendees.Title>
              {this.mapAttendees(event.attendees)}
            </Attendees>
          </Col>
        </div>
      );
    }
    return <h3>LOADING....</h3>;
  }
}
const mapStateToProps = state => ({
  event: eventByIdSelector(state),
  attendees: attendeesSelector(state)
});
export default connect(mapStateToProps, {
  getEventsById,
  deleteEvent,
  attendEvent,
  unAttendEvent,
  updateEvent
})(EventDetails);
