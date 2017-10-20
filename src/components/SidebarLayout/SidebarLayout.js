import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { Sidebar, Quote, Col, Header } from "../";
import { whiteLogo, blackLogo } from "../../assets";
import { Media } from "../../utils";
import { Link } from "react-router-dom";
const StyledLayout = styled.div`
  position: relative;
  background: #fff;
  .bg-white {
    background: #fff;
    // position: relative;
    display:flex;
    flex-direction:column;
    min-height: 100vh;
    justify-content: center;
  }
  .user,
  .mobile-msg {
    float: right;
    font-size: 14px;
    color: #c9ced3;
    letter-spacing: 0;
    ${Media.mobile`display:none;`} a {
      all: unset;
      color: #949ea8;
    }
  }
  .mobile-msg {
    display: none;
    ${Media.mobile`
      display:block;
      float:none;
      text-align:center;
      margin-bottom:40px;
    `};
  }
  .logo {
    float: left;
    img:first-of-type {
      ${Media.mobile`display:none;`};
    }
    img:last-of-type {
      display: none;
      ${Media.mobile`display:block;`};
    }
  }
  .content {
    width: 50%;
    margin: 0 auto;
    // position: absolute;
    // top: 50%;
    // left: 0;
    // right: 0;
    // transform: translateY(-50%);
    ${Media.mobile`
    width:100%;
    padding:24px;
    position:static;
    transform:none;
  `};
    button {
      ${Media.mobile`float:none;margin:0 auto;display:inherit`};
    }
  }
`;
export default ({ component: Component, ...rest }) => {
  const accountMsg = () => {
    if (rest.path === "/login") {
      return (
        <small className={"user"}>
          Don’t have account?
          <Link to={"/register"}> SIGN UP</Link>
        </small>
      );
    }
    return (
      <small className={"user"}>
        Already have an account?
        <Link to={"/login"}> SIGN IN</Link>
      </small>
    );
  };
  return (
    <Route
      {...rest}
      render={matchProps => (
        <StyledLayout >
          <Header>
            <div className="logo">
              <img src={whiteLogo} alt="Eventio" />
              <img src={blackLogo} alt="Eventio" />
            </div>
            {accountMsg()}
          </Header>
          <Col desktop={4} style={{padding:0}}>
            <Sidebar>
              <Quote>
                "Great Kid Don't get cocky."
                <p>Hans Solo</p>
              </Quote>
            </Sidebar>
          </Col>
          <Col className="bg-white"  desktop={8} mobile={12} style={{padding:0}}>
            <div className={"content"}>
              <Component {...matchProps} />
            </div>
          </Col>
        </StyledLayout>
      )}
    />
  );
};
