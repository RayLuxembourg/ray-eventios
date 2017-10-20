import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent } from "../../containers/EventsList/ducks";
import NewEventForm from "./NewEventForm";
import styled from "styled-components";
import {Link} from "react-router-dom";
const Close = styled(Link)`
  all:unset;
  font-size: 16px;
  color: #323c46;
  letter-spacing: 0;
  line-height: 48px;
  position:absolute;
  top:0;
  right:30px;
  &:before {
    content: "X ";
    font-weight:bold;
  }
`;
class EventNew extends Component {
  // 2018-12-08T10:46:33.901Z

  handleSubmit = event => {
    const eventValue = event.toJS();
    console.log(
      new Date(`${eventValue.date} ${eventValue.time}`).toISOString()
    );
    const newEvent = {
      title: eventValue.title,
      description: eventValue.description,
      capacity: parseInt(eventValue.capacity),
      startsAt: new Date(`${eventValue.date} ${eventValue.time}`).toISOString()
    };
    this.props.createEvent(newEvent);
    this.props.history.push("/");
  };

  render() {
    return (
      <div style={{ padding: "0 8px" }}>
        <Close to={"/"}>Close</Close>
        <NewEventForm newEvent={event => this.handleSubmit(event)} />
      </div>
    );
  }
}

export default connect(null, { createEvent })(EventNew);
