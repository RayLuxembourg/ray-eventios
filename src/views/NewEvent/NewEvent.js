import React, { Component } from "react";
import { connect } from "react-redux";
import Headline from "../../components/Headline/Headline";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styled from "styled-components";
import { postEvent } from "../EventsList/ducks";
const NewEventForm = styled.form`
  width: 480px;
  max-width: 100%;
  padding: 40px 32px;
  background-color: #fff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  border-radius: 2px;

  margin: 0 auto;

  h1,
  p {
    text-align: center;
  }
  button {
    margin: 0 auto;
    float: none;
    display: inherit;
    margin-top: 20px;
  }
`;
class EventNew extends Component {
  // 2018-12-08T10:46:33.901Z
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      date: "",
      time: "",
      capacity: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const event = {
      title: data.get("title"),
      description: data.get("description"),
      // date: data.get("date"),
      startsAt: "2018-12-08T10:46:33.901Z" || data.get("time"),
      capacity: parseInt(data.get("capacity"))
    };
    this.props.postEvent(event);
    this.props.history.push("/");
  };
  onChange = (e, type) => {
    this.setState({ [type]: e.target.value });
  };
  render() {
    const { title, description, date, time, capacity } = this.state;

    return (
      <NewEventForm noValidate onSubmit={this.handleSubmit}>
        <Headline title={"Create new event"} subtitle={"Enter details below"} />
        <Input
          type={"text"}
          label={"Title"}
          name={"title"}
          value={title || ""}
          onChange={e => this.onChange(e, "title")}
          required
        />
        <Input
          type={"text"}
          label={"Description"}
          name={"description"}
          value={description || ""}
          onChange={e => this.onChange(e, "description")}
          required
        />
        <Input
          type={"text"}
          label={"Date"}
          name={"date"}
          value={date || ""}
          onChange={e => this.onChange(e, "date")}
          required
        />
        <Input
          type={"text"}
          label={"Time"}
          name={"time"}
          value={time || ""}
          onChange={e => this.onChange(e, "time")}
          required
        />
        <Input
          type={"number"}
          label={"Capacity"}
          name={"capacity"}
          value={capacity || ""}
          onChange={e => this.onChange(e, "capacity")}
          required
        />
        <Button content={"CREATE NEW EVENT"} />
      </NewEventForm>
    );
  }
}

export default connect(null, { postEvent })(EventNew);
