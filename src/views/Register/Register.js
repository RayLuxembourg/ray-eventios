import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "./ducks";
import { Headline, Input, Button } from "../../components";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import RegisterForm from "./RegisterForm";
const validate = values => {
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
  } else if (values.repassword === values.password) {
    errors.repassword = "Doesnt not much password";
  }
  console.log("validating", errors);
  return errors;
};
class Register extends Component {
  handleSubmit(form) {
    this.props.register(form.toJS());
  }

  render() {
    const { history } = this.props;
    const register = this.props.registerState.toJS();
    if (register.success) {
      history.push("/login");
    }
    return <RegisterForm loading={register.loading} register={(form)=>this.handleSubmit(form)} />;
  }
}
const mapStateToProps = state => ({
  registerState: state.get("register")
});
export default connect(mapStateToProps, { register })(Register);
// export default reduxForm({
//   form: "registerForm",
//   validate
// })(RegisterComponent);
