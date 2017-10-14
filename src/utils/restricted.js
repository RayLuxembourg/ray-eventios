import React, { Component } from "react";
import { withRouter,Redirect } from "react-router-dom";
import {setupInterceptors} from "../api";
export default BaseComponent => {
  class Restricted extends Component {
    constructor(){
      super();
      this.state = {auth:null}
    }
    componentWillMount() {
      this.checkAuthentication(this.props);
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        this.checkAuthentication(nextProps);
      }
    }
    checkAuthentication(params) {
      console.log("check auth");
      const { history } = params;      
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");
      if(!user || !token){
        history.replace({ pathname: "/login" })
      }
      setupInterceptors(()=>{
        history.replace({ pathname: "/login" })
      });
      this.setState({auth:true});
    //   .catch(e => history.replace({ pathname: "/login" }));
    }
    render() {
      if(!this.state.auth){
        return <Redirect to="/login"/>
      }
      return <BaseComponent {...this.props} />;
    }
  }
  return withRouter(Restricted);
};
