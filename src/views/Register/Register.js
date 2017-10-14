import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "./ducks";
import { Headline, Input, Button } from "../../components";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      repassword: "",
      firstName: "",
      lastName: ""
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const user = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password")
    };
    this.props.register(user);
  }
  onChange = (e, type) => {
    this.setState({ [type]: e.target.value });
  };
  render() {
    const { history } = this.props;
    const register = this.props.registerState.toJS();
    if (register.success) {
      history.push("/login");
    }
    const { email, firstName, lastName, password, repassword } = this.state;
    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <Headline
          title={"Get started absolutely free."}
          subtitle={"Enter your details below."}
          errorMsg={
            register.error
              ? "Oops! make sure you filled in all the details correctly"
              : null
          }
        />
        <Input
          label={"First name"}
          name={"firstName"}
          value={firstName || ""}
          onChange={e => this.onChange(e, "firstName")}
        />
        <Input
          label={"Last name"}
          name={"lastName"}
          value={lastName || ""}
          onChange={e => this.onChange(e, "lastName")}
        />
        <Input
          label={"Email"}
          name={"email"}
          value={email || ""}
          onChange={e => this.onChange(e, "email")}
        />
        <Input
          label={"Password"}
          name={"password"}
          value={password || ""}
          type={"password"}
          onChange={e => this.onChange(e, "password")}
        />
        <Input
          label={"Repeat password"}
          name={"repassword"}
          value={repassword || ""}
          type={"password"}
          onChange={e => this.onChange(e, "repassword")}
        />
        <div className={"mobile-msg"}>
          Already have an account?
          <Link to={"/login"}> SIGN IN</Link>
        </div>
        <Button loading={register.loading} content={"SIGN UP"} />
      </form>
    );
  }
}
const mapStateToProps = state => ({
  registerState: state.get("register")
});
export default connect(mapStateToProps, { register })(Register);
