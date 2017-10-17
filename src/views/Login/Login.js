import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Input, Headline } from "../../components/";
import {
  login,
  loginComplete,
  errorSelector,
  loadingSelector,
  successSelector
} from "./ducks";
import { Redirect } from "react-router-dom";
import { removeAuth } from "../../api";
import LoginForm from "./LoginForm";
class Login extends Component {

  componentDidMount() {
    removeAuth();
    localStorage.removeItem("token");
  }
  handleSubmit = loginForm => {
    this.props.login(loginForm.toJS());
    // this.setState({ redirectToRef: true });
    //redirect on success
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/" }
    };
    console.log(this.props)
    const {loading,success,error,loginComplete} = this.props;
    if (success) {
      loginComplete();
      return <Redirect to={from} />;
    }
    return (
      <LoginForm
        isError={error}
        isLoading={loading}
        login={loginFrom => this.handleSubmit(loginFrom)}
      />
    );
  }
}
const mapStateToProps = state => ({
  error: errorSelector(state),
  loading: loadingSelector(state),
  success: successSelector(state)
});
export default connect(mapStateToProps, { login,loginComplete })(Login);
