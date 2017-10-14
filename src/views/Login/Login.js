import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Input, Headline } from "../../components/";
import { login } from "./ducks";
import { Redirect } from "react-router-dom";
import {removeAuth} from "../../api";
class Login extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "", redirectToRef: false };
  }
  componentDidMount(){
    removeAuth();
    localStorage.removeItem("token");
  }
  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const user = { email: data.get("email"), password: data.get("password") };
    this.props.login(user);
    // this.setState({ redirectToRef: true });
    //redirect on success
  };
  onChange = (e, type) => {
    this.setState({ [type]: e.target.value });
  };
  render() {
    const { email, password, redirectToRef } = this.state;
    const { from } = this.props.location.state || {
      from: { pathname: "/" }
    };
    const auth = this.props.auth.toJS();
    if (auth.success) {
      return <Redirect to={from} />;
    }
    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <Headline
          title={"Sign in to Eventio"}
          subtitle={"Enter your details below."}
          errorMsg={
            auth.error
              ? "Oops! That email and pasword combination is not valid."
              : null
          }
        />

        <Input
          error={auth.error}
          name={"email"}
          value={email || ""}
          label={"Email"}
          onChange={e => this.onChange(e, "email")}
        />
        <Input
          error={auth.error}
          name={"password"}
          value={password}
          label={"Password"}
          type={"password"}
          onChange={e => this.onChange(e, "password")}
        />

        <Button loading={auth.loading} content={"LOGIN"} />
      </form>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.get("auth")
});
export default connect(mapStateToProps, { login })(Login);
