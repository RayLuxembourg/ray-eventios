import React from "react";
import styled from "styled-components";
import {Media} from "../../utils";
import PropTypes from "prop-types";
const UserHeaderStyle = styled.div`
float: right;
position: relative;
cursor: pointer;
&:after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #d9dce1 transparent transparent transparent;
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
}
.user {
    float: right;
    font-size: 14px;
    color: #c9ced3;
    letter-spacing: 0;
    line-height: 40px;
    ${Media.mobile`display:none;`}
  }
.name-initials {
    background: #d9dce1;
    font-size: 14px;
    color: #949ea8;
    letter-spacing: 0;
    line-height: 40px;
    text-align: center;
    height: 40px;
    width: 40px;
    float: right;
    border-radius: 50%;
    margin-right: 6px;
  }
.dropdown {
  position: absolute;
  background: #ffffff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  bottom: -100px;
  right: -20px;
  padding: 16px 16px;
  list-style: none;
  min-width:162px;
  &:after{
    content:"",
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 14px 12px 14px;
    border-color: transparent transparent #ffffff transparent;        
  }
  li {
    font-size: 14px;
    color: #9ca5af;
    letter-spacing: 0;
    margin-bottom:8px;
    a{
      all:unset;
    }
    &:last-of-type{
      margin-bottom:0;
    }
  }
}

`;
const UserHeader = ({user}) => {
  if(!user){
    return <div></div>
  }
  return (
    <UserHeaderStyle>
      <small className={"user"}>
        {user.firstName} {user.lastName}
      </small>
      <div className={"name-initials"}>
        {user.firstName[0]} {user.lastName[0]}
      </div>
    </UserHeaderStyle>
  );
};

UserHeader.prototype = {
    user:PropTypes.shape({
        firstName:PropTypes.string,
        lastName:PropTypes.string
    }).isRequired
}

export default UserHeader;
