import React from 'react';
import { reduxForm, Field } from "redux-form/immutable";
import { Headline, Input, Button } from "../../components";
import { Link } from "react-router-dom";

const validate = form => {
    const values = form.toJS();
    console.log(form.toJS());
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.repassword) {
      errors.repassword = "Required";
      console.log("passwords",values.password,values.repassword);
    } else if (values.password !== values.repassword) {
      errors.repassword = "Doesnt not much password";
    }
    console.log("validating", errors);
    return errors;
  };
const RegisterForm = (props) => {
    const submit = (values) => {
        console.log(values)
      }
    const { handleSubmit, pristine, reset, submitting,register,loading } = props    
    return (
        <form  onSubmit={handleSubmit(register)}>
          <Headline
            title={"Get started absolutely free."}
            subtitle={"Enter your details below."}
    
          />
          <Field
            name="firstName"
            label={"First name"}
            component={Input}
            type="text"
          />
          <Field
            name="lastName"
            label={"Last name"}
            component={Input}
            type="text"
          />
          <Field name="email" label={"Email"} component={Input} type="text" />
          <Field
            name="password"
            label={"Password"}
            component={Input}
            type="password"
          />
          <Field
            name="repassword"
            label={"Repeat password"}
            component={Input}
            type="password"
          />
          <div className={"mobile-msg"}>
            Already have an account?
            <Link to={"/login"}> SIGN IN</Link>
          </div>
          <Button
            type={"submit"}
            content={"SIGN UP"}
            loading={loading}
            disabled={submitting}
          />
        </form>
      );
};

export default reduxForm({
    form: 'registerForm',
    validate, 
  })(RegisterForm)