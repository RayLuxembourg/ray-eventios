import React from "react";
import { reduxForm, Field } from "redux-form/immutable";
import { Headline, Input, Button } from "../../components";
import { Link } from "react-router-dom";

const validate = form => {
  const values = form.toJS();
  console.log(form.toJS());
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password  is required";
  }
  return errors;
};
const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting, login, loading } = props;
  return (
    <form onSubmit={handleSubmit(login)}>
      <Headline
        title={"Sign in to Eventio"}
        subtitle={"Enter your details below."}
      />
      <Field name="email" label={"Email"} component={Input} type="text" />
      <Field
        name="password"
        label={"Password"}
        component={Input}
        type="password"
      />

      <div className={"mobile-msg"}>
        Don’t have account?
        <Link to={"/login"}> SIGN UP</Link>
      </div>
      <Button
        type={"submit"}
        content={"SIGN IN"}
        loading={loading}
        disabled={submitting}
      />
    </form>
  );
};

export default reduxForm({
  form: "loginForm",
  validate
})(LoginForm);
