import React, { Component } from "react";
import { connect } from "react-redux";
import { postEvent } from "../../containers/EventsList/ducks";
import NewEventForm from "./NewEventForm";
import format  from "date-fns/format";

class EventNew extends Component {
  // 2018-12-08T10:46:33.901Z

  handleSubmit = event => {
    const eventValue = event.toJS();
    console.log(new Date(`${eventValue.date} ${eventValue.time}`).toISOString());
    const newEvent = {
      title:eventValue.title,
      description:eventValue.description,
      capacity:parseInt(eventValue.capacity),
      startsAt:new Date(`${eventValue.date} ${eventValue.time}`).toISOString()
    }
    this.props.postEvent(newEvent);
    this.props.history.push("/");
  };

  render() {
    return <NewEventForm newEvent={event => this.handleSubmit(event)} />;
  }
}

export default connect(null, { postEvent })(EventNew);
