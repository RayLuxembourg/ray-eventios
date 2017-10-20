import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { Header, Container, UserHeader, UserMenu } from "../";
import { blackLogo, backArrowIcon } from "../../assets";
import { Link } from "react-router-dom";
import { Media } from "../../utils";
const StyledLayout = styled.div`
  position: relative;
  .dashboard-logo {
    padding-top: 10px;
  }
  .bg-white {
    background: #fff;
    position: relative;
  }
  .showMenu {
    display: list-item;
  }
  .content {
    width: 50%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    ${Media.mobile`
  width:100%;
  padding:24px;
`};
  }

  .back-to-events {
    text-align: center;
    position: absolute;
    z-index: 10;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 140px;
    line-height: 48px;
    font-size: 16px;
    color: #323c46;
    letter-spacing: 0;
    cursor: pointer;
    z-index: 10;
    img {
      vertical-align: middle;
      margin-right: 10px;
    }
  }
  .event-id {
    font-family: Roboto-Regular;
    font-size: 12px;
    color: #a9aeb4;
    letter-spacing: 1px;
    line-height: 24px;
    margin-bottom: 24px;
  }
  .attendees {
    padding-left: 20px;
    ${Media.mobile`padding-left:8px;margin-top:15px`};
  }
`;
class Layout extends React.Component {
  constructor() {
    super();
    this.state = { showMenu: false };
  }
  backToDashboard = history => {
    console.log(history);
    if (
      history.location.pathname !== "/" &&
      history.location.pathname !== "/profile" &&
      history.location.pathname !== "/new"
    ) {
      return (
        <div onClick={() => history.push("/")} className="back-to-events">
          <img src={backArrowIcon} alt="" />
          Back to events
        </div>
      );
    }
  };
  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }
  showMenu() {
    return this.state.showMenu ? "showMenu" : "";
  }
  render() {
    const { component: Component, ...rest } = this.props;
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <Route
        {...rest}
        render={matchProps => (
          <StyledLayout>
            <Header>
              {this.backToDashboard(matchProps.history)}
              <img className={"dashboard-logo"} src={blackLogo} alt="" />
              <UserHeader
                user={user}
                onClick={this.toggleMenu.bind(this)}
              />
              <UserMenu
                onClick={this.toggleMenu.bind(this)}
                className={this.showMenu()}
              >
                <UserMenu.Item>
                  <Link to={"/profile"}>Profile</Link>
                </UserMenu.Item>
                <UserMenu.Item>
                  <Link to={"/login"}>Logout</Link>
                </UserMenu.Item>
              </UserMenu>
            </Header>
            <Container>
              <Component {...matchProps} />
            </Container>
          </StyledLayout>
        )}
      />
    );
  }
}

export default Layout;
