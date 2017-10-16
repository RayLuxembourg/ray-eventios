import React from "react";
import { connect } from "react-redux";
import { register } from "./ducks";
import RegisterForm from "./RegisterForm";

const Register = props => {
  const handleSubmit = form => {
    props.register(form.toJS());
  };
  const { history } = props;
  const register = props.registerState.toJS();
  if (register.success) {
    history.push("/login");
  }
  return (
    <RegisterForm
      loading={register.loading}
      register={form => handleSubmit(form)}
    />
  );
};

const mapStateToProps = state => ({
  registerState: state.get("register")
});

export default connect(mapStateToProps, { register })(Register);
