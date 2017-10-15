import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Input, Headline } from "../../components/";
import { login } from "./ducks";
import { Redirect } from "react-router-dom";
import {removeAuth} from "../../api";
import LoginForm from "./LoginForm";
class Login extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "", redirectToRef: false };
  }
  componentDidMount(){
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
    const auth = this.props.auth.toJS();
    if (auth.success) {
      return <Redirect to={from} />;
    }
    return <LoginForm loading={auth.loading} login={(loginFrom)=>this.handleSubmit(loginFrom)} />
  }
}
const mapStateToProps = state => ({
  auth: state.get("auth")
});
export default connect(mapStateToProps, { login })(Login);
