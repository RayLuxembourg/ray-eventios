import React from "react";
import { Input, ActionButton } from "../../components";
import styled from "styled-components";
import { reduxForm, Field } from "redux-form/immutable";
import isFuture from "date-fns/is_future";
import { connect } from "react-redux";
import { eventByIdEditSelector } from "./ducks";
import {saveIcon} from "../../assets";
const EditForm = styled.form`
  background: #ffffff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  border-radius: 2px;
  padding: 32px;
  width: 100%;
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
let EditEvent = props => {
  const { handleSubmit, saveEdit } = props;
  console.log(props);
  return (
    <EditForm onSubmit={handleSubmit(saveEdit)}>
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
      <ActionButton type={"submit"}>
        <ActionButton.content src={saveIcon}>
        </ActionButton.content>
      </ActionButton>
    </EditForm>
  );
};

EditEvent = reduxForm({
  form: "editEventForm",
  validate
})(EditEvent);
EditEvent = connect(state => ({
  initialValues: eventByIdEditSelector(state)
}))(EditEvent);
export default EditEvent;
