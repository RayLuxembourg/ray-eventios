import React from "react";
import { reduxForm, Field } from "redux-form/immutable";
import { Headline, Input, Button } from "../../components";
import styled from "styled-components";
import isFuture from "date-fns/is_future";
const StyledForm = styled.form`
  width: 480px;
  max-width: 100%;
  padding: 40px 32px;
  background-color: #fff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  border-radius: 2px;
  margin: 0 auto;
  margin-top:40px;
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
const validate = form => {
  const values = form.toJS();
  console.log(form.toJS());
  const errors = {};
  if (!values.title) {
    errors.title = "Title  is required";
  }
  if (!values.description) {
    errors.description = "Description is required";
  }
  if (!values.date) {
    errors.date = "Date is required";
  } else if (!isFuture(values.date)) {
    errors.date = "Please select a future date";
  }
  if (!values.time) {
    errors.time = "Time is required";
  }
  if (!values.capacity) {
    errors.capacity = "Capacity is required";
  }
  return errors;
};
const NewEventForm = props => {
  const { handleSubmit, submitting, newEvent, loading } = props;
  return (
    <StyledForm onSubmit={handleSubmit(newEvent)}>
      <Headline title={"Create new event"} subtitle={"Enter details below"} />
      <Field name="title" label={"Title"} component={Input} type="text" />
      <Field
        name="description"
        label={"Description"}
        component={Input}
        type="text"
      />
      <Field name="date" label={"Date"} component={Input} type="date" />
      <Field name="time" label={"Time"} component={Input} type="time" />
      <Field
        name="capacity"
        label={"Capacity"}
        component={Input}
        type="number"
      />
      <Button
        type={"submit"}
        content={"CREATE NEW EVENT"}
        loading={loading}
        disabled={submitting}
      />
    </StyledForm>
  );
};

export default reduxForm({
  form: "newEventForm",
  validate
})(NewEventForm);
