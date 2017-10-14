import React from "react";
import { Input, Button } from "../../components";
import styled from "styled-components";

const EditForm = styled.form`
  background: #ffffff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  border-radius: 2px;
  padding: 32px;
  width: 100%;
`;
const EditEvent = ({ event }) => {
  console.log(event);
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const user = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password")
    };
    this.props.register(user);
  };
  const onChange = (e, type) => {
    this.setState({ [type]: e.target.value });
  };
  return (
    <EditForm>
      <Input label={"Date"} type={"date"} name={"firstName"} value={""} />
      <Input label={"Time"} type={"time"} name={"firstName"} />
      <Input label={"Title"} name={"firstName"} value={event.title} />
      <Input
        label={"Description"}
        name={"firstName"}
        value={event.description}
      />
      <Input
        label={"Capacity"}
        type={"number"}
        name={"firstName"}
        value={event.capacity}
      />
    </EditForm>
  );
};

export default EditEvent;
