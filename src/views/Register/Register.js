import React from "react";
import { connect } from "react-redux";
import { register,registerCompleted,errorSelector,loadingSelector,successSelector } from "./ducks";
import RegisterForm from "./RegisterForm";

const Register = props => {
  const handleSubmit = form => {
    props.register(form.toObject());
  };
  const { history,loading,success,error,registerCompleted } = props;
  if (success) {
    registerCompleted();
    history.push("/login");
  }
  return (
    <RegisterForm
      isError={error}
      loading={loading}
      register={form => handleSubmit(form)}
    />
  );
};

const mapStateToProps = state => ({
  loading:loadingSelector(state),
  success:successSelector(state),
  error:errorSelector(state)
});

export default connect(mapStateToProps, { register,registerCompleted })(Register);
